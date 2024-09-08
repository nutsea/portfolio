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

export const App = observer(() => {
    const { page } = useContext(Context)
    const mainRef = useRef()
    const aboutRef = useRef()
    const pricesRef = useRef()

    const refs = [mainRef, aboutRef, pricesRef]

    // const handleScroll = () => {
    //     if (page.programmatically) return

    //     const closestSection = refs.reduce((closest, ref) => {
    //         const refTop = ref.current.getBoundingClientRect().top

    //         console.log(refTop)

    //         if (refTop >= 0 && refTop < window.innerHeight) {
    //             return Math.abs(refTop) < Math.abs(closest.top) ? { ref, top: refTop } : closest
    //         }

    //         return closest
    //     }, { ref: null, top: Infinity })

    //     if (closestSection.ref === mainRef) {
    //         page.setPage('/')
    //     } else if (closestSection.ref === aboutRef) {
    //         page.setPage('/about')
    //     } else if (closestSection.ref === pricesRef) {
    //         page.setPage('/pricing')
    //     }
    // }

    const handleScroll = () => {
        console.log(page.programmatically)
        if (page.programmatically) return

        const closestSection = refs.reduce((closest, ref) => {
            const refTop = ref.current.getBoundingClientRect().top

            console.log(refTop)

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
        // page.setProgrammatically(true)

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

        // const timeout = setTimeout(() => page.setProgrammatically(false), 500)

        // return () => clearTimeout(timeout)
    }, [page, page.page])

    return (
        <div className="App">
            <Header />
            <Menu />
            <Main ref={mainRef} />
            <About ref={aboutRef} />
            <Prices ref={pricesRef} />
        </div>
    )
})