import React, { useContext, useEffect, useRef, useState } from "react";
import './ThemeAnim.scss'

import logo from '../../assets/images/logotype.svg'
import logo_white from '../../assets/images/logo_white.svg'
import sun from '../../assets/images/light_anim_light.svg'
import sun2 from '../../assets/images/light_anim_dark.svg'
import moon from '../../assets/images/dark_anim_light.svg'
import moon2 from '../../assets/images/dark_anim_dark.svg'
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const ThemeAnim = observer(() => {
    const { page } = useContext(Context)
    const [logoColor, setLogoColor] = useState()
    const [icons, setIcons] = useState('')
    const [changeTo, setChangeTo] = useState('')
    const [circleAnim, setCircleAnim] = useState('')
    const [sunAnim, setSunAnim] = useState('')
    const [moonAnim, setMoonAnim] = useState('')
    const isFirstRender = useRef(true)

    const switchToLightTheme = () => {
        const root = document.documentElement
        root.style.setProperty('--text', '#232323')
        root.style.setProperty('--header', '#F3F3F3')
        root.style.setProperty('--header-bg', 'rgba(0, 0, 0, 0)')
        root.style.setProperty('--line', '#E5E5E5')
        root.style.setProperty('--line-bright', '#d3d3d3')
        root.style.setProperty('--border', '#ffffff')
        root.style.setProperty('--shadow', '2px 2px 5px rgba(0, 0, 0, 0.1)')
        root.style.setProperty('--prices', '#231C4C')
        root.style.setProperty('--progress', '#8576DF')
        root.style.setProperty('--inactive', '#afafaf')
        root.style.setProperty('--check', '#8576DF')
        root.style.setProperty('--submit', '#C6BDFC')
        root.style.setProperty('--light-btn-bg', '#C6BDFC66')
        root.style.setProperty('--orange-flex', '#c')
        root.style.setProperty('--background', '#ffffff')
        root.style.setProperty('--violet-flex', '#413689')
        root.style.setProperty('--error-flex', '#ff7b00')
    }

    const switchToDarkTheme = () => {
        const root = document.documentElement
        root.style.setProperty('--text', '#ebebeb')
        root.style.setProperty('--header', '#232323')
        root.style.setProperty('--header-bg', 'rgba(#181818, 0.9)')
        root.style.setProperty('--line', '#232323')
        root.style.setProperty('--line-bright', '#333333')
        root.style.setProperty('--border', '#181818')
        root.style.setProperty('--shadow', '2px 2px 5px rgba(0, 0, 0, 0.4)')
        root.style.setProperty('--border', '#362c72')
        root.style.setProperty('--progress', '#C6BDFC')
        root.style.setProperty('--inactive', '#808080')
        root.style.setProperty('--check', '#ffffff')
        root.style.setProperty('--light-btn-bg', '#ffffffb3')
        root.style.setProperty('--orange-flex', '#ffb168')
        root.style.setProperty('--background', '#181818')
        root.style.setProperty('--violet-flex', '#a094e8')
        root.style.setProperty('--error-flex', '#ffb168')
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        if (!page.lightTheme) {
            page.setChangingTheme(false)
            setLogoColor('Dark')
            setIcons('dark')
            setChangeTo('ToLight')
            setSunAnim('Up')
            setMoonAnim('Down')
            setCircleAnim('CircleAnim')
            setTimeout(() => {
                page.setLightTheme(true)
                document.body.classList.add('LightTheme')
                switchToLightTheme()
                setTimeout(() => {
                    setChangeTo('Disable')
                    setTimeout(() => {
                        setLogoColor('')
                        setCircleAnim('')
                        setChangeTo('')
                        setSunAnim('')
                        setMoonAnim('')
                    }, 200)
                }, 200);
            }, 700)
        } else {
            page.setChangingTheme(false)
            setLogoColor('Light')
            setIcons('light')
            setChangeTo('ToDark')
            setSunAnim('Down')
            setMoonAnim('Up')
            setCircleAnim('CircleAnim')
            setTimeout(() => {
                page.setLightTheme(false)
                document.body.classList.remove('LightTheme')
                switchToDarkTheme()
                setTimeout(() => {
                    setChangeTo('Disable')
                    setTimeout(() => {
                        setLogoColor('')
                        setCircleAnim('')
                        setChangeTo('')
                        setSunAnim('')
                        setMoonAnim('')
                    }, 200)
                }, 200);
            }, 700)
        }
        // eslint-disable-next-line
    }, [page.changingTheme])

    return (
        <div className={`ThemeAnimContainer ${changeTo}`}>
            <div className={`ThemeLogo ${logoColor}`}>
                {icons === 'dark' ?
                    <img src={logo} alt="" />
                    :
                    <img src={logo_white} alt="" />
                }
                <span>WebPromise</span>
            </div>
            <div className={`ThemeAnimCircle ${circleAnim}`}>
                {icons === 'dark' ?
                    <>
                        <img className={`ShowTheme ${sunAnim}`} src={sun2} alt="" />
                        <img className={moonAnim} src={moon2} alt="" />
                    </>
                    :
                    <>
                        <img className={sunAnim} src={sun} alt="" />
                        <img className={`ShowTheme ${moonAnim}`} src={moon} alt="" />
                    </>
                }
            </div>
        </div>
    )
})