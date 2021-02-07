import React from 'react'
import '../styles/news.css'

export function NewsStory({
                      title,
                      time,
                      url
                  }) {

    const date = new Date(time * 1000)
    return (
        <div className="content">
            <a href={url}><h5>{title}</h5></a>
            <div>
                <span>{date.toDateString()}</span>
            </div>
        </div>
    )
}
