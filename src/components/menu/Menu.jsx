import React, { forwardRef, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import './Menu.scss'
import { Context } from "../..";

import home from '../../assets/images/home_page3.svg'
import about from '../../assets/images/about_page3.svg'
import cases from '../../assets/images/cases_page3.svg'
import services from '../../assets/images/services_page3.svg'
import contacts from '../../assets/images/contacts_page3.svg'

import home2 from '../../assets/images/home_page.svg'
import about2 from '../../assets/images/about_page.svg'
import cases2 from '../../assets/images/cases_page.svg'
import services2 from '../../assets/images/services_page.svg'
import contacts2 from '../../assets/images/contacts_page.svg'

import arr from '../../assets/images/arr_tip.svg'

export const Menu = observer(forwardRef((props, ref) => {
    const { onPage } = props
    const { page } = useContext(Context)
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`MenuContainer ${scrollPos > 100 ? 'ActiveMenu' : ''}`}>
            <div className="MenuBox">
                <div className={`MenuTab ${page.page === '/' ? (page.lightTheme ? 'ChosenTab' : 'ChosenTabLight') : ''}`} onClick={() => onPage('/')} >
                    {(page.lightTheme) ?
                        <img src={home} alt="" />
                        :
                        <img src={home2} alt="" />
                    }
                    <div className="MenuTip">
                        <img src={arr} alt="" />
                        <span>Главная</span>
                    </div>
                </div>
                <div className={`MenuTab ${page.page === '/about' ? (page.lightTheme ? 'ChosenTab' : 'ChosenTabLight') : ''}`} onClick={() => onPage('/about')} >
                    {(page.lightTheme) ?
                        <img src={about} alt="" />
                        :
                        <img src={about2} alt="" />
                    }
                    <div className="MenuTip">
                        <img src={arr} alt="" />
                        <span>О нас</span>
                    </div>
                </div>
                <div className={`MenuTab ${page.page === '/cases' ? (page.lightTheme ? 'ChosenTab' : 'ChosenTabLight') : ''}`} onClick={() => onPage('/cases')} >
                    {(page.lightTheme) ?
                        <img src={cases} alt="" />
                        :
                        <img src={cases2} alt="" />
                    }
                    <div className="MenuTip">
                        <img src={arr} alt="" />
                        <span>Кейсы</span>
                    </div>
                </div>
                <div className={`MenuTab ${page.page === '/pricing' ? (page.lightTheme ? 'ChosenTab' : 'ChosenTabLight') : ''}`} onClick={() => onPage('/pricing')} >
                    {(page.lightTheme) ?
                        <img src={services} alt="" />
                        :
                        <img src={services2} alt="" />
                    }
                    <div className="MenuTip">
                        <img src={arr} alt="" />
                        <span>Тарифы</span>
                    </div>
                </div>
                <div className={`MenuTab ${page.page === '/contacts' ? (page.lightTheme ? 'ChosenTab' : 'ChosenTabLight') : ''}`} onClick={() => onPage('/contacts')} >
                    {(page.lightTheme) ?
                        <img src={contacts} alt="" />
                        :
                        <img src={contacts2} alt="" />
                    }
                    <div className="MenuTip">
                        <img src={arr} alt="" />
                        <span>Контакты</span>
                    </div>
                </div>
            </div>
        </div>
    )
}))