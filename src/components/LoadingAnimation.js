import React from 'react'
import '../styles/news.css'

export function LoadingAnimation(props) {
    return (
        <div className="lds-roller" hidden={props.hidden}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
