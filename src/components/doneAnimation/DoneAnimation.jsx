import React from "react"
import './DoneAnimation.scss'

export const DoneAnimation = () => {
    return (
        <div id="done" className="Done">
            <svg id="rotate" className="Rotate" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle id="circle" class="Path Circle" fill="none" stroke-width="10" stroke-miterlimit="10" cx="66.1" cy="66.1" r="58.9" />
            </svg>
            <svg className="Absolute" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <polyline id="polyline" class="Path Check" fill="none" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
            </svg>
        </div>
    )
}