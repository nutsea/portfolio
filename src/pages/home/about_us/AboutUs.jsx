import React, { forwardRef, useEffect, useState } from "react"
import './AboutUs.scss'
import { observer } from "mobx-react-lite"

import webpromise from '../../../assets/images/webpromise2.svg'

const cardContent = {
    1: {
        num: 1,
        sub: 'Комплексный подход',
        text: 'Берем на себя весь процесс – от разработки до запуска и поддержки. Вам не нужно беспокоиться о технических деталях.',
    },
    2: {
        num: 2,
        sub: 'Скорость и качество',
        text: 'Соблюдаем сроки и сдаем проекты с проверенной функциональностью.',
    },
    3: {
        num: 3,
        sub: 'Гибкость',
        text: 'Подстраиваемся под задачи клиента, работаем как с готовыми макетами, так и предлагаем собственные решения.',
    }
}

export const AboutUs = observer(forwardRef((props, ref) => {
    const [cardNum, setCardNum] = useState(1)
    const [cardSub, setCardSub] = useState('Комплексный подход')
    const [cardText, setCardText] = useState('Берем на себя весь процесс – от разработки до запуска и поддержки. Вам не нужно беспокоиться о технических деталях.')

    const handleCardClick = () => {
        // document.querySelector('.ActiveCard').classList.add('AnimateCard')
        if (cardNum === 3) {
            setCardNum(1)
        } else {
            setCardNum(cardNum + 1)
        }
    }

    return (
        <section className="PageContainer" ref={ref}>
            <div className="AboutSub"><span>Почему</span> выбирают <span>Webpromise</span></div>
            <div className="AboutPar">
                Нас выбирают те, кто ценит качество, прозрачность и долгосрочный результат.
                Наши клиенты знают, что могут рассчитывать на внимательное отношение к деталям,
                честный диалог и поддержку на каждом этапе — от идеи до результата.
                Мы вкладываемся в каждый проект так, будто делаем его для себя,
                потому что для нас важно не просто запустить сайт, но и помочь клиенту достичь своих целей.
            </div>
            <div className="AboutCards">
                <div className="AboutCard FirstCard ActiveCard" onClick={handleCardClick}>
                    <div className="AboutCardLeft">
                        <div className="AboutCardNum">{cardNum}</div>
                        <div className="AboutCardLine"></div>
                    </div>
                    <div className="AboutCardRight">
                        <div className="AboutCardSub">{cardContent[cardNum].sub}</div>
                        <div className="AboutCardText">{cardContent[cardNum].text}</div>
                    </div>
                    <img className="AboutCardLogo" src={webpromise} alt="" />
                </div>
                <div className="AboutCard SecondCard">
                    <div className="AboutCardLeft">
                        <div className="AboutCardNum"></div>
                        <div className="AboutCardLine"></div>
                    </div>
                    {/* <div className="AboutCardRight">
                        <div className="AboutCardSub">Скорость и качество</div>
                        <div className="AboutCardText">
                            Соблюдаем сроки и сдаем проекты с проверенной функциональностью.
                        </div>
                    </div>
                    <img className="AboutCardLogo" src={webpromise} alt="" /> */}
                </div>
                <div className="AboutCard ThirdCard">
                    <div className="AboutCardLeft">
                        <div className="AboutCardNum"></div>
                        <div className="AboutCardLine"></div>
                    </div>
                    {/* <div className="AboutCardRight">
                        <div className="AboutCardSub">Гибкость</div>
                        <div className="AboutCardText">
                            Подстраиваемся под задачи клиента, работаем как с готовыми макетами, так и предлагаем собственные решения.
                        </div>
                    </div>
                    <img className="AboutCardLogo" src={webpromise} alt="" /> */}
                </div>
            </div>
        </section>
    )
}))