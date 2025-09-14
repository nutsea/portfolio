import React, { forwardRef, useState } from "react"
import './Contacts.scss'
import { emailValidation, formatBackspace, formatPhoneNumber } from "../../../utils/Formatter"
import { sendOrder } from "../../../http/botAPI"
import { DoneAnimation } from "../../../components/doneAnimation/DoneAnimation"

import call from './icons/call.png'
import mail from './icons/mail.png'
import tg from './icons/tg.png'
import whatsapp from './icons/whatsapp.png'
import { IoCheckmark } from "react-icons/io5"

export const Contacts = forwardRef((props, ref) => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [telegram, setTelegram] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')
    const [status2, setStatus2] = useState('')
    const [error, setError] = useState('')
    const [privacyChecked, setPrivacyChecked] = useState(true)

    const handlePhone = (e) => {
        const formattedNumber = formatPhoneNumber(e)
        setPhoneNumber(formattedNumber)
    }

    const handleBackspace = (e) => {
        if (e.keyCode === 8 || e.key === 'Backspace') {
            const formattedNumber = formatBackspace(e).formattedNumber
            const isEmpty = formatBackspace(e).isEmpty
            if (!isEmpty) setPhoneNumber('+7 ' + formattedNumber)
            else setPhoneNumber(formattedNumber)
        }
    }

    const sendMessage = async () => {
        if (name.length === 0 || phoneNumber.length === 0 || !privacyChecked) {
            setError(true)
            setStatus('Заполните все обязательные поля')
            return
        }

        if (phoneNumber.length < 18) {
            setError(true)
            setStatus('Некорректный номер телефона')
            return
        }

        if (!emailValidation(email) && email.length > 0) {
            setError(true)
            setStatus('Некорректный E-mail')
            return
        }

        if ((email.length === 0 && phoneNumber.length === 18) || (emailValidation(email) && phoneNumber.length === 18)) {
            setError(false)
            setStatus(<DoneAnimation pc />)
            setStatus2(<DoneAnimation mobile />)
        }

        const timeoutPromise = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))

        try {
            await Promise.race([
                await sendOrder(null, name, phoneNumber, telegram, email, message).then(() => {
                    setName('')
                    setPhoneNumber('')
                    setTelegram('')
                    setEmail('')
                    setMessage('')

                    document.querySelectorAll('#circle')?.forEach(i => i.classList.add('Sent'))
                    document.querySelectorAll('#polyline')?.forEach(i => i.classList.add('Sent'))
                    setTimeout(() => {
                        document.querySelectorAll('#rotate')?.forEach(i => i.classList.add('Rotate'))
                        setTimeout(() => {
                            document.querySelectorAll('#done')?.forEach(i => i.classList.add('Disable'))
                            setTimeout(() => {
                                setStatus('')
                                setStatus2('')
                            }, 900);
                        }, 3000)
                    }, 900)
                }),
                timeoutPromise(20000)
            ])
        } catch (e) {
            setError(true)
            setStatus('Произошла ошибка')
        }
    }

    return (
        <section className="PageContainer" ref={ref}>
            <div className="ContactsRow">
                <div className="SendForm">
                    <div className="ContactsSub">Свяжитесь с нами</div>
                    <div className="SendFormRow">
                        <div className="ContactsInputBox">
                            <input className="ContactsInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <label className={`ContactsInputPlaceholder ${name && name.length > 0 ? '' : 'ContactsCanTransform'}`}>Имя*</label>
                        </div>
                        <div className="ContactsInputBox">
                            <input className="ContactsInput" type="text" pattern="\d*" value={phoneNumber} maxLength={18} onChange={handlePhone} onKeyDown={handleBackspace} />
                            <label className={`ContactsInputPlaceholder ${phoneNumber && phoneNumber.length > 0 ? '' : 'ContactsCanTransform'}`}>Номер телефона*</label>
                        </div>
                    </div>
                    <div className="SendFormRow">
                        <div className="ContactsInputBox">
                            <input className="ContactsInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className={`ContactsInputPlaceholder ${email && email.length > 0 ? '' : 'ContactsCanTransform'}`}>Электронная почта</label>
                        </div>
                        <div className="ContactsInputBox">
                            <input className="ContactsInput" type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                            <label className={`ContactsInputPlaceholder ${telegram && telegram.length > 0 ? '' : 'ContactsCanTransform'}`}>Telegram</label>
                        </div>
                    </div>
                    <div className="ContactsInputBoxBig">
                        <textarea className="ContactsInput" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label className={`ContactsInputPlaceholder ${message && message.length > 0 ? '' : 'ContactsCanTransform'}`}>Сообщение</label>
                    </div>
                    <div className="TestConfirmation">
                        <div className={`TestConfirmCheckbox ${privacyChecked ? 'Checked' : ''}`} onClick={() => setPrivacyChecked(!privacyChecked)}>
                            <IoCheckmark size={16} />
                        </div>
                        <span>Я согласен(-на) с&nbsp;</span>
                        <a className="TestLink" href={`${window.location.origin}/privacy`} target="_blank" rel="noreferrer">политикой конфиденциальности</a>
                        <span>*</span>
                    </div>
                    <div className="TestRequired">* - обязатальные поля</div>
                    <div className="ContactsSendRow">
                        <div className="ContactsSendBtn" onClick={sendMessage}><span>Отправить {status2}</span></div>
                        <div className={`ContactsStatus ${error ? 'Error' : ''}`}>{status}</div>
                    </div>
                </div>
                <div className="MailSubscribe">
                    <div className="MailSubscribeSub">Наши Новости</div>
                    <div className="MailSubscribePar">Подписывайся на рассылку, чтобы получать новости, полезные советы и эксклюзивные предложения первым!</div>
                    <div className="NewsInputBox">
                        <input className="ContactsInput" type="text" value={email2} onChange={(e) => setEmail2(e.target.value)} />
                        <label className={`ContactsInputPlaceholder ${email2 && email2.length > 0 ? '' : 'ContactsCanTransform'}`}>Электронная почта</label>
                    </div>
                    <div className="NewsSendBtn">Отправить</div>
                </div>
            </div>
            <div className="ContactsCards">
                <a className="ContactCard First" href="tel:+79953682131">
                    <div className="ContactCardTop">
                        <img src={call} alt="" />
                        <span>+7 (995) 368 21-31</span>
                    </div>
                    <div className="ContactCardPar">Свяжитесь с нами по телефону, и мы ответим на все ваши вопросы</div>
                </a>
                <a className="ContactCard Second" href="mailto:webpromise@yandex.ru">
                    <div className="ContactCardTop">
                        <img src={mail} alt="" />
                        <span>webpromise@yandex.ru</span>
                    </div>
                    <div className="ContactCardPar">Напишите нам на почту — отправьте свои идеи, запросы или вопросы</div>
                </a>
                <a className="ContactCard Third" href="https://wa.me/79953682131" target="_blank" rel="noreferrer">
                    <div className="ContactCardTop">
                        <img src={whatsapp} alt="" />
                        <span>WebPromise</span>
                    </div>
                    <div className="ContactCardPar">Напишите нам в WhatsApp — обсудим ваши вопросы и идеи прямо сейчас</div>
                </a>
                <a className="ContactCard Fourth" href="https://t.me/webpromise" target="_blank" rel="noreferrer">
                    <div className="ContactCardTop">
                        <img src={tg} alt="" />
                        <span>@webpromise</span>
                    </div>
                    <div className="ContactCardPar">Задайте вопрос или оставьте заявку в Telegram</div>
                </a>
            </div>
        </section>
    )
})