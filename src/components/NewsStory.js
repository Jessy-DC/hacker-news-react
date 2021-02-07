import React from 'react'
import '../styles/news.css'

export function NewsStory({
                      title,
                      time,
                      url,
                      score
                  }) {

    const date = new Date(time * 1000)
    return (
        <div className="content">
            <a target="_blank" href={url}><h5>{title}</h5></a>
            <div>
                <span>{date.toDateString()}</span>
                <p>Score : {score} {score > 1 ? 'points' : 'point' }</p>
            </div>
        </div>
    )
}
