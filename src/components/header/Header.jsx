import React, { useContext } from "react";
import './Header.scss'

import logo from '../../assets/images/logo.svg'
import logo_white from '../../assets/images/logo_white.svg'
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const Header = observer(() => {
    const { page } = useContext(Context)

    const handlePage = (link) => {
        page.setProgrammatically(true)
        page.setPage(link)
        setTimeout(() => {
            page.setProgrammatically(false)
        }, 2000)
    }

    return (
        <div className="Header">
            <div className="HeaderLogo" onClick={() => page.setPage('/')}>
                {page.lightTheme ?
                    <img src={logo} alt="" />
                    :
                    <img src={logo_white} alt="" />
                }
                <span>WebPromise</span>
            </div>
            <nav className="HeaderNav">
                <ul>
                    {/* <li onClick={() => page.setPage('/')} className={page.page === '/' ? 'ChosenTab' : ''}>Главная</li>
                    <li onClick={() => page.setPage('/about')} className={page.page === '/about' ? 'ChosenTab' : ''}>О нас</li>
                    <li onClick={() => page.setPage('/cases')} className={page.page === '/cases' ? 'ChosenTab' : ''}>Кейсы</li>
                    <li onClick={() => page.setPage('/pricing')} className={page.page === '/pricing' ? 'ChosenTab' : ''}>Тарифы</li>
                    <li onClick={() => page.setPage('/contacts')} className={page.page === '/contacts' ? 'ChosenTab' : ''}>Контакты</li> */}
                    <li onClick={() => handlePage('/')} className={page.page === '/' ? 'ChosenTab' : ''}>Главная</li>
                    <li onClick={() => handlePage('/about')} className={page.page === '/about' ? 'ChosenTab' : ''}>О нас</li>
                    <li onClick={() => handlePage('/cases')} className={page.page === '/cases' ? 'ChosenTab' : ''}>Кейсы</li>
                    <li onClick={() => handlePage('/pricing')} className={page.page === '/pricing' ? 'ChosenTab' : ''}>Тарифы</li>
                    <li onClick={() => handlePage('/contacts')} className={page.page === '/contacts' ? 'ChosenTab' : ''}>Контакты</li>
                </ul>
            </nav>
        </div>
    )
})