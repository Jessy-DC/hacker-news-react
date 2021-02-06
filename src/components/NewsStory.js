import React from 'react'

export function NewsStory({
                      title,
                      time,
                      url
                  }) {

    const date = new Date(time * 1000)
    return (
        <div>
            <a href={url}><h5>{title}</h5></a>
            <div>
                <span>{date.toDateString()}</span>
            </div>
        </div>
    )
}
