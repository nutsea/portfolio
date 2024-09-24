import React, { forwardRef, useContext } from "react";
import './Header.scss'

import logo from '../../assets/images/logotype.svg'
import logo_white from '../../assets/images/logo_white.svg'
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const Header = observer(forwardRef((props, ref) => {
    const { onPage } = props
    const { page } = useContext(Context)

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
                    <li onClick={() => onPage('/')} className={page.page === '/' ? 'ChosenTab' : ''}>Главная</li>
                    <li onClick={() => onPage('/about')} className={page.page === '/about' ? 'ChosenTab' : ''}>О нас</li>
                    <li onClick={() => onPage('/cases')} className={page.page === '/cases' ? 'ChosenTab' : ''}>Кейсы</li>
                    <li onClick={() => onPage('/pricing')} className={page.page === '/pricing' ? 'ChosenTab' : ''}>Тарифы</li>
                    <li onClick={() => onPage('/contacts')} className={page.page === '/contacts' ? 'ChosenTab' : ''}>Контакты</li>
                </ul>
            </nav>
        </div>
    )
}))