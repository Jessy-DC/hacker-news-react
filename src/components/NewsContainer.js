import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {getStoryFromID} from "../api/api.news";
import {NewsStory} from "./NewsStory";

export function NewsContainer({storyID}) {
    const [story, setStory] = useState(null)

    useEffect(() => {
        async function getStory(id) {
            const storyResult = await getStoryFromID(id)
            console.log(storyResult)
            setStory(storyResult);
        }
        getStory(storyID)
    })

    if(story == null) {
        return <p>No data found</p>
    }

    const {title, time, url} = story;

    return (
        <div>
            <NewsStory
            title={title}
            time={time}
            url={url}
            />
        </div>
    )
}

NewsContainer.propTypes = {
    storyID: PropTypes.number.isRequired
}
