import React, { forwardRef, useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../.."
import { useNavigate } from "react-router-dom"
import './Footer.scss'

import webpromise from '../../assets/images/webpromise3.svg'
import webpromise2 from '../../assets/images/webpromise4.svg'

export const Footer = observer(forwardRef((props, ref) => {
    const navigate = useNavigate()
    const { onPage } = props
    const { page } = useContext(Context)
    const date = new Date()

    const handleNavigate = (link) => {
        onPage(link)
        navigate(link)
    }

    return (
        <footer className="Footer">
            {/* <div className="FooterSlogan">Преврати идею в цифровую реальность</div> */}
            {page.lightTheme ?
                <img className="FooterSub" src={webpromise} alt="" />
                :
                <img className="FooterSub" src={webpromise2} alt="" />
            }
            <div className="FooterRow">
                <div className="FooterCol Wide">
                    <div className="FooterColSub">Навигация</div>
                    <div className="FooterLine"></div>
                    <nav>
                        <ul>
                            <li className="FooterItem" onClick={() => handleNavigate('/')}>Главная</li>
                            <li className="FooterItem" onClick={() => handleNavigate('/about')}>О нас</li>
                            <li className="FooterItem" onClick={() => handleNavigate('/cases')}>Кейсы</li>
                            <li className="FooterItem" onClick={() => handleNavigate('/pricing')}>Тарифы</li>
                            <li className="FooterItem" onClick={() => handleNavigate('/contacts')}>Контакты</li>
                            <a className="FooterItem" href={`${window.location.origin}/privacy`} target="_blank" rel="noreferrer">Политика конфиденциальности</a>
                        </ul>
                    </nav>
                </div>
                <div className="FooterCol Thin">
                    <div className="FooterColSub">Социальные сети</div>
                    <div className="FooterLine"></div>
                    <a className="FooterItem" href="https://www.instagram.com/webpromise" target="_blank" rel="noreferrer">Instagram</a>
                    <div className="FooterItem Soon">Telegram Channel</div>
                    <div className="FooterItem Soon">VK</div>
                </div>
                <div className="FooterCol Thin">
                    <div className="FooterColSub">Контакты</div>
                    <div className="FooterLine"></div>
                    <a className="FooterItem" href="tel:+79953682131">+7 (995) 368 21-31</a>
                    <a className="FooterItem" href="mailto:webpromise@yandex.ru">webpromise@yandex.ru</a>
                    <a className="FooterItem" href="https://wa.me/79953682131" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a className="FooterItem" href="https://t.me/webpromise" target="_blank" rel="noreferrer">Telegram</a>
                </div>
            </div>
            <div className="FooterRights2">© {date.getFullYear()} webpromise.ru</div>
            <div className="FooterRights">
                <span>© {date.getFullYear()}</span>
                <span>webpromise.ru</span>
            </div>
        </footer>
    )
}))