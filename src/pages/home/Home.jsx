import React, { useContext, useEffect, useRef } from "react"
import { Context } from "../.."
import { observer } from "mobx-react-lite"

import { ThemeAnim } from '../../components/themeAnim/ThemeAnim'
import { Header } from '../../components/header/Header'
import { Menu } from '../../components/menu/Menu'
import { BottomMenu } from '../../components/bottomMenu/BottomMenu'
import { Main } from './main/Main'
import { About } from './about/About'
import { Prices } from './prices/Prices'
import { Contacts } from "./contacts/Contacts"
import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer/Footer"
import { BurgerMenu } from "../../components/burgerMenu/BurgerMenu"

export const Home = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const { page } = useContext(Context)
    const mainRef = useRef(null)
    const aboutRef = useRef(null)
    const pricesRef = useRef(null)
    const contactsRef = useRef(null)
    const refs = [mainRef, aboutRef, pricesRef, contactsRef]
    const timeoutRef = useRef(null)

    const handlePage = (link) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        page.setProgrammatically(true)
        page.setPage(link)
        navigate(link)

        timeoutRef.current = setTimeout(() => {
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
            navigate('/')
        } else if (closestSection.ref === aboutRef) {
            page.setPage('/about')
            navigate('/about')
        } else if (closestSection.ref === pricesRef) {
            page.setPage('/pricing')
            navigate('/pricing')
        } else if (closestSection.ref === contactsRef) {
            page.setPage('/contacts')
            navigate('/contacts')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        // eslint-disable-next-line
    }, [page.programmatically])

    useEffect(() => {
        if (!page.programmatically) return
        if (page.rate) return

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

            case '/contacts':
                contactsRef?.current.scrollIntoView({ behavior: 'smooth' })
                break

            default:
                break
        }
    }, [page, page.page])

    useEffect(() => {
        page.setPage(location.pathname)

        switch (page.page) {
            case '/':
                mainRef?.current.scrollIntoView()
                break

            case '/about':
                aboutRef?.current.scrollIntoView()
                break

            case '/pricing':
                pricesRef?.current.scrollIntoView()
                break

            case '/contacts':
                contactsRef?.current.scrollIntoView()
                break

            default:
                break
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ThemeAnim />
            <Header onPage={handlePage} />
            <Menu onPage={handlePage} />
            <BurgerMenu />
            <BottomMenu onPage={handlePage} />
            <Main ref={mainRef} onPage={handlePage} />
            <About ref={aboutRef} />
            <Prices ref={pricesRef} />
            <Contacts ref={contactsRef} />
            <Footer onPage={handlePage} />
        </>
    )
})