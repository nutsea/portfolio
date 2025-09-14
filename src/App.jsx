import React, { useContext, useEffect } from 'react'
import { TestModal } from './components/testModal/TestModal'
import { AppRoutes } from './AppRoutes'
import './styles/base.scss'
import './styles/app.scss'
import { Context } from '.'

export const App = () => {
    const { page } = useContext(Context)
    
    const switchToLightTheme = () => {
        const root = document.documentElement
        root.style.setProperty('--text', '#232323')
        root.style.setProperty('--anti-text', '#ebebeb')
        root.style.setProperty('--text-half', '#2323234d')
        root.style.setProperty('--text-quarter', '#2323231a')
        // root.style.setProperty('--header', '#F3F3F3')
        root.style.setProperty('--header', '#efefef')
        root.style.setProperty('--header-bg', 'rgba(255, 255, 255)')
        root.style.setProperty('--header-bg-transparent', 'rgba(255, 255, 255, 0.5)')
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
        root.style.setProperty('--violet-flex', '#364289')
        root.style.setProperty('--error-flex', '#ff7b00')
        root.style.setProperty('--violet-text', '#3347e1')
    }

    const switchToDarkTheme = () => {
        const root = document.documentElement
        root.style.setProperty('--text', '#ebebeb')
        root.style.setProperty('--anti-text', '#232323')
        root.style.setProperty('--text-half', '#ebebeb4d')
        root.style.setProperty('--text-quarter', '#ebebeb1a')
        root.style.setProperty('--header', '#232323')
        root.style.setProperty('--header-bg', 'rgba(24, 24, 24)')
        root.style.setProperty('--header-bg-transparent', 'rgba(24, 24, 24, 0.5)')
        root.style.setProperty('--line', '#232323')
        root.style.setProperty('--line-bright', '#333333')
        root.style.setProperty('--border', '#181818')
        root.style.setProperty('--shadow', '2px 2px 5px rgba(0, 0, 0, 0.4)')
        root.style.setProperty('--progress', '#C6BDFC')
        root.style.setProperty('--inactive', '#808080')
        root.style.setProperty('--check', '#ffffff')
        root.style.setProperty('--light-btn-bg', '#ffffffb3')
        root.style.setProperty('--orange-flex', '#ffb168')
        root.style.setProperty('--background', '#181818')
        root.style.setProperty('--violet-flex', '#949ae8')
        root.style.setProperty('--error-flex', '#ffb168')
        root.style.setProperty('--violet-text', '#767fff')
    }

    useEffect(() => {
        const lightTheme = JSON.parse(localStorage.getItem('lightTheme'))
        page.setLightTheme(lightTheme)
        if (lightTheme) {
            switchToLightTheme()
            document.body.classList.add('LightTheme')
        } else {
            switchToDarkTheme()
            document.body.classList.remove('LightTheme')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="App">
            <AppRoutes />
            <TestModal />
        </div>
    )
}