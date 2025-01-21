import React, { forwardRef, useContext, useEffect, useState } from "react";
import './BottomMenu.scss'
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";

import sun from '../../assets/images/light.svg'
import moon from '../../assets/images/dark.svg'
import question_dark from '../../assets/images/question_dark.svg'
import question_light from '../../assets/images/question_light.svg'
import arr_dark from '../../assets/images/arr_dark.svg'
import arr_light from '../../assets/images/arr_light.svg'

export const BottomMenu = observer(forwardRef((props, ref) => {
    const navigate = useNavigate()
    const { onPage } = props
    const { page } = useContext(Context)
    const [scrollPos, setScrollPos] = useState(0)

    const handleNavigate = (link) => {
        onPage(link)
        navigate(link)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = () => {
        setScrollPos(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="BottomMenuContainer">
            <div className="BottomMenuBox">
                <div className={`ScrollTab ${scrollPos > 100 ? '' : 'InactiveTab'}`}>
                    <div className={`BottomMenuTab ${scrollPos > 100 ? '' : 'InactiveTab'}`} onClick={() => handleNavigate('/')}>
                        {(page.lightTheme) ?
                            <img src={arr_dark} alt="" />
                            :
                            <img src={arr_light} alt="" />
                        }
                    </div>
                </div>
                <div className="BottomMenuTab" onClick={() => page.setChangingTheme(true)}>
                    {(page.lightTheme) ?
                        <img src={moon} alt="" />
                        :
                        <img src={sun} alt="" />
                    }
                </div>
                <div className="BottomMenuTab">
                    {(page.lightTheme) ?
                        <img src={question_dark} alt="" />
                        :
                        <img src={question_light} alt="" />
                    }
                </div>
            </div>
        </div>
    )
}))