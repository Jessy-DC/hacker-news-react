import React from 'react'
import '../styles/news.css'
import {Link} from 'react-router-dom'


export function Header() {
    return (
        <header className="header-bar">
            <h3>Hacker news React</h3>
            <h3><a target="_blank" href="https://news.ycombinator.com">Original website</a></h3>
        </header>

    )
}
