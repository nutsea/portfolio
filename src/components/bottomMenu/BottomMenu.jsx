import React, { useContext } from "react";
import './BottomMenu.scss'
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import sun from '../../assets/images/light.svg'
import moon from '../../assets/images/dark.svg'
import question_dark from '../../assets/images/question_dark.svg'
import question_light from '../../assets/images/question_light.svg'

export const BottomMenu = observer(() => {
    const { page } = useContext(Context)

    return (
        <div className="BottomMenuContainer">
            <div className="BottomMenuBox">
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
})