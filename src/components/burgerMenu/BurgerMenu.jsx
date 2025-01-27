import React, { useState } from "react"
import './BurgerMenu.scss'

export const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    return (
        <menu className="BurgerMenu" onClick={() => setActive(!active)}>
            <div className={`BurgerMenuBox ${active ? 'Active' : ''}`}>
                <button className={`BurgerBtn ${active ? 'Active' : ''}`}><span></span></button>
            </div>
        </menu>
    )
}