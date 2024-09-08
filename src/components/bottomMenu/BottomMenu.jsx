import React, { useContext } from "react";
import './BottomMenu.scss'
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const BottomMenu = () => {
    const { page } = useContext(Context)
    
    return (
        <div></div>
    )
}