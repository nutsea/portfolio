import './styles/base.scss'
import './styles/app.scss'
import { Header } from './components/header/Header'
import { Main } from './pages/main/Main'
import { Menu } from './components/menu/Menu'
import { About } from './pages/about/About'
import { Prices } from './pages/prices/Prices'
import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '.'
import { observer } from 'mobx-react-lite'
import { BottomMenu } from './components/bottomMenu/BottomMenu'
import { ThemeAnim } from './components/themeAnim/ThemeAnim'

export const App = observer(() => {
    const { page } = useContext(Context)
    const mainRef = useRef()
    const aboutRef = useRef()
    const pricesRef = useRef()
    const refs = [mainRef, aboutRef, pricesRef]
    const timeoutRef = useRef(null)

    const handlePage = (link) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        page.setProgrammatically(true)
        page.setPage(link)

        timeoutRef.current = setTimeout(() => {
            console.log('timeout')
            page.setProgrammatically(false)
        }, 2000)
    }

    const handleScroll = () => {
        if (page.programmatically) return

        const closestSection = refs.reduce((closest, ref) => {
            const refTop = ref.current.getBoundingClientRect().top
            if (refTop >= 0 && refTop < 100) {
                return Math.abs(refTop) < Math.abs(closest.top) ? { ref, top: refTop } : closest
            }
            return closest
        }, { ref: null, top: Infinity })

        if (closestSection.ref === mainRef) {
            page.setPage('/')
        } else if (closestSection.ref === aboutRef) {
            page.setPage('/about')
        } else if (closestSection.ref === pricesRef) {
            page.setPage('/pricing')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        // eslint-disable-next-line
    }, [page.programmatically])

    useEffect(() => {
        switch (page.page) {
            case '/':
                mainRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            case '/about':
                aboutRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            case '/pricing':
                pricesRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            default:
                break
        }
    }, [page, page.page])

    return (
        <div className="App">
            <ThemeAnim />
            <Header onPage={handlePage} />
            <Menu onPage={handlePage} />
            <BottomMenu />
            <Main ref={mainRef} />
            <About ref={aboutRef} />
            <Prices ref={pricesRef} />
        </div>
    )
})