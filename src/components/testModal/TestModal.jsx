import React, { useContext, useEffect, useRef, useState } from "react"
import './TestModal.scss'
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { IoIosClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import arr from '../../assets/images/arr_black.svg'
import { sendOrder } from "../../http/botAPI";
import { formatBackspace, formatPhoneNumber } from "../../utils/Formatter";

const questions = [
    {
        question: 'Какой тип сайта вам нужен?',
        answers: [
            { answer: 'Лендинг (одностраничный сайт)' },
            { answer: 'Корпоративный сайт' },
            { answer: 'Интернет-магазин' },
            { answer: 'Веб-приложение' },
            { answer: 'Другой вариант', other: true }
        ]
    },
    {
        question: 'Какие функции вы ожидаете от сайта?',
        answers: [
            { answer: 'Презентация услуг или товаров' },
            { answer: 'Продажа товаров онлайн (интернет-магазин)' },
            { answer: 'Интерактивные элементы (калькуляторы, квизы и т.д.)' },
            { answer: 'Интеграция с CRM, другими сервисами' },
            { answer: 'Другой вариант', other: true }
        ]
    },
    {
        question: 'Какой у вас бюджет на создание сайта?',
        answers: [
            { answer: 'До 50 000 ₽' },
            { answer: '50 000 - 100 000 ₽' },
            { answer: '100 000 - 300 000 ₽' },
            { answer: '300 000 - 500 000 ₽' },
            { answer: 'Более 500 000 ₽' },
            { answer: 'Пока не определён' }
        ]
    },
    {
        question: 'Какие сроки у вас для запуска проекта?',
        answers: [
            { answer: 'Меньше месяца' },
            { answer: '1–3 месяца' },
            { answer: '3–6 месяцев' },
            { answer: 'Сроки не критичны' }
        ]
    },
    {
        question: 'Есть ли у вас предпочтения по дизайну?',
        answers: [
            { answer: 'Да, есть примеры сайтов, которые мне нравятся' },
            { answer: 'Хочу уникальный дизайн, разработанный с нуля' },
            { answer: 'Уже есть готовый дизайн' },
            { answer: 'Неважно, доверяю вашим решениям' }
        ]
    }
]

export const TestModal = observer(() => {
    const { page } = useContext(Context)
    const [testStep, setTestStep] = useState(0)
    const [checkedAnswer, setCheckedAnswer] = useState(null)
    const [otherAnswer, setOtherAnswer] = useState('')
    const testUser = useRef(['', '', '', '', ''])
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sendNumber, setSendNumber] = useState('')
    const [telegram, setTelegram] = useState('')
    const [email, setEmail] = useState('')
    const [privacyChecked, setPrivacyChecked] = useState(true)
    const [testSent, setTestSent] = useState(false)
    const [scrollPos, setScrollPos] = useState(0)

    const handleClose = (e) => {
        if (!e.target.closest('.TestBox') || e.target.closest('.TestClose')) {
            page.setTesting(false)
            page.setContacting(false)
        }
    }

    const handlePhone = (e) => {
        const formattedNumber = formatPhoneNumber(e)
        const cleaned = ('' + e.target.value).replace(/\D/g, '')
        setPhoneNumber(formattedNumber)
        setSendNumber(cleaned)
    }

    const handleBackspace = (e) => {
        if (e.keyCode === 8 || e.key === 'Backspace') {
            const formattedNumber = formatBackspace(e).formattedNumber
            const isEmpty = formatBackspace(e).isEmpty
            const newCleaned = ('7' + formattedNumber).replace(/\D/g, '')
            if (!isEmpty) setPhoneNumber('+7 ' + formattedNumber)
            else setPhoneNumber(formattedNumber)
            setSendNumber(newCleaned)
        }
    }

    const sendMessage = async () => {
        await sendOrder(testUser.current, name, phoneNumber, telegram, email).then(() => {
            document.querySelector('.TestBox').classList.remove('Position')
            setTestSent(true)
            setTimeout(() => {
                page.setTesting(false)
                page.setContacting(false)
                setTimeout(() => {
                    setTestSent(false)
                    setName('')
                    setPhoneNumber('')
                    setSendNumber('')
                    setTelegram('')
                    setEmail('')
                }, 300)
            }, 900)
        })
    }

    useEffect(() => {
        if (page.testing || page.contacting) {
            document.querySelector('.TestModal').classList.add('Show')
            setTimeout(() => {
                document.querySelector('.TestModal').classList.add('Background')
                document.querySelector('.TestBox').classList.add('Position')
            }, 10)
            if (window.innerWidth <= 490 || window.innerHeight <= 650) {
                setScrollPos(window.scrollY)
                setTimeout(() => {
                    document.querySelector('.App')?.classList.add('Lock')
                }, 300);
            }
        } else {
            if (window.innerWidth <= 490 || window.innerHeight <= 650) {
                document.querySelector('.App')?.classList.remove('Lock')
                window.scrollTo(0, scrollPos)
            }
            document.querySelector('.TestModal').classList.remove('Background')
            document.querySelector('.TestBox').classList.remove('Position')
            document.querySelector('.TestSent')?.classList.add('Disable')
            setTimeout(() => {
                document.querySelector('.TestModal').classList.remove('Show')
            }, 300)
        }
        // eslint-disable-next-line
    }, [page.testing, page.contacting])

    useEffect(() => {
        if (page.contacting) {
            page.setTesting(false)
            setTestStep(5)
            document.querySelector('.TestProgressBar').classList.add('None')
        } // eslint-disable-next-line
    }, [page.contacting])

    useEffect(() => {
        if (page.testing) {
            page.setContacting(false)
            setTestStep(0)
            document.querySelector('.TestProgressBar').classList.remove('None')
            setTimeout(() => {
                document.querySelector('.TestProgressBar').classList.remove('Disable')
            }, 500)
        } // eslint-disable-next-line
    }, [page.testing])

    useEffect(() => {
        if (testStep === 5) {
            setTimeout(() => {
                document.querySelector('.TestProgressBar').classList.add('Disable')
            }, 500)
        }
    }, [testStep])

    return (
        <div className="TestModal" onClick={handleClose}>
            {testSent &&
                <div className="TestSent">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle class="path circle" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                        <polyline class="path check" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                    </svg>
                </div>
            }
            <div className="TestBox">
                <div className="TestBoxTop">
                    {testStep < 5 ?
                        <div className="TestSub">Расчет стоимости</div>
                        :
                        <div className="TestSub2">Оставьте заявку</div>
                    }
                    <IoIosClose className="TestClose" size={30} />
                </div>
                {testStep < 5 &&
                    <>
                        <div className="TestInteractive">
                            <div className="TestQuestion">{questions[testStep].question}</div>
                            {questions[testStep].answers.map((answer, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="TestAnswer"
                                        onClick={() => {
                                            setCheckedAnswer(answer)
                                            setOtherAnswer('')
                                        }}
                                    >
                                        <span className={`TestCheckbox ${checkedAnswer?.answer === answer.answer ? 'Checked' : ''}`}></span>
                                        <span className="TestAnswerText">{answer.answer}</span>
                                    </div>
                                )
                            })}
                            {(testStep === 0 || testStep === 1) &&
                                <input
                                    className="TestInput TestOtherAnswer"
                                    type="text"
                                    placeholder="Другой вариант (необязательно)"
                                    value={otherAnswer}
                                    onChange={(e) => setOtherAnswer(e.target.value)}
                                    onFocus={() => setCheckedAnswer({ answer: 'Другой вариант', other: true })}
                                />
                            }
                        </div>
                        <div className="TestBottom">
                            <div
                                className={`TestNext ${checkedAnswer ? 'Active' : ''}`}
                                onClick={() => {
                                    if (checkedAnswer.other && otherAnswer) {
                                        testUser.current[testStep] = otherAnswer
                                    } else {
                                        testUser.current[testStep] = checkedAnswer.answer
                                    }
                                    setTestStep(testStep + 1)
                                    setCheckedAnswer(null)
                                    setOtherAnswer('')
                                }}
                            >
                                <span>Далее</span>
                                <img src={arr} alt="" />
                            </div>
                            <div className="TestProgress">{testStep + 1}/5</div>
                        </div>
                    </>
                }
                {testStep >= 5 &&
                    <>
                        <div className="TestInputBox">
                            <input className="TestInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <label className={`TestInputPlaceholder ${name && name.length > 0 ? '' : 'CanTransform'}`}>Имя*</label>
                        </div>
                        <div className="TestInputBox">
                            <input className="TestInput" type="text" pattern="\d*" value={phoneNumber} maxLength={18} onChange={handlePhone} onKeyDown={handleBackspace} />
                            <label className={`TestInputPlaceholder ${phoneNumber && phoneNumber.length > 0 ? '' : 'CanTransform'}`}>Номер телефона*</label>
                        </div>
                        <div className="TestInputBox">
                            <input className="TestInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className={`TestInputPlaceholder ${email && email.length > 0 ? '' : 'CanTransform'}`}>Электронная почта</label>
                        </div>
                        <div className="TestInputBox">
                            <input className="TestInput" type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                            <label className={`TestInputPlaceholder ${telegram && telegram.length > 0 ? '' : 'CanTransform'}`}>Telegram</label>
                        </div>
                        <div className="TestConfirmation">
                            <div className={`TestConfirmCheckbox ${privacyChecked ? 'Checked' : ''}`} onClick={() => setPrivacyChecked(!privacyChecked)}>
                                <IoCheckmark size={16} />
                            </div>
                            <span>Я согласен(-на) с&nbsp;</span>
                            <a className="TestLink" href={`${window.location.origin}/privacy`} target="_blank" rel="noreferrer">политикой конфиденциальности</a>
                            <span>*</span>
                        </div>
                        <div className={`TestSubmit ${privacyChecked && name.length > 0 && sendNumber.length === 11 ? 'Active' : ''}`} onClick={sendMessage}>Отправить</div>
                        <div className="TestRequired">* - обязатальные поля</div>
                        {page.contacting &&
                            <>
                                <div className="TestBr">
                                    <span className="SpanLine"></span>
                                    <span className="SpanOr">или</span>
                                    <span className="SpanLine"></span>
                                </div>
                                <div className="TestSub2">Свяжитесь с нами</div>
                                <div className="ContactBtns">
                                    <a href="https://t.me/webpromise" target="_blank" rel="noreferrer" className="ContactBtn">
                                        <FaTelegramPlane size={22} />
                                        <span>Telegram</span>
                                    </a>
                                    <a href="https://wa.me/79953682131" target="_blank" rel="noreferrer" className="ContactBtn">
                                        <FaWhatsapp size={22} />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </>
                        }
                    </>
                }
                <div className="TestProgressBar">
                    <span style={{ width: `calc(100% / 5 * ${testStep})` }}></span>
                </div>
            </div>
        </div>
    )
})