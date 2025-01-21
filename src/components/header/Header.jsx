import React, { forwardRef, useContext } from "react";
import './Header.scss'

import logo from '../../assets/images/logotype.svg'
import logo_white from '../../assets/images/logo_white.svg'
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";

export const Header = observer(forwardRef((props, ref) => {
    const navigate = useNavigate()
    const { onPage } = props
    const { page } = useContext(Context)

    const handleNavigate = (link) => {
        onPage(link)
        navigate(link)
    }

    return (
        <header className="Header">
            <div 
                className="HeaderLogo" 
                onClick={() => {
                    page.setPage('/')
                    navigate('/')
                }}
            >
                {page.lightTheme ?
                    <img src={logo} alt="" />
                    :
                    <img src={logo_white} alt="" />
                }
                <span>WebPromise</span>
            </div>
            <nav className="HeaderNav">
                <ul>
                    <li onClick={() => handleNavigate('/')} className={page.page === '/' ? 'ChosenTab' : ''}>Главная</li>
                    <li onClick={() => handleNavigate('/about')} className={page.page === '/about' ? 'ChosenTab' : ''}>О нас</li>
                    <li onClick={() => handleNavigate('/cases')} className={page.page === '/cases' ? 'ChosenTab' : ''}>Кейсы</li>
                    <li onClick={() => handleNavigate('/pricing')} className={page.page === '/pricing' ? 'ChosenTab' : ''}>Тарифы</li>
                    <li onClick={() => handleNavigate('/contacts')} className={page.page === '/contacts' ? 'ChosenTab' : ''}>Контакты</li>
                </ul>
            </nav>
        </header>
    )
}))