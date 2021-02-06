import React, {useState, useEffect} from 'react'
import {getTopStoriesID} from "../api/api.news";

function NewsList() {
    const [storiesID, setStoriesID] = useState([])

    useEffect(() => {
        async function getStories() {
            const stories = await getTopStoriesID();

            const filteredStories = stories.filter((id, index) => {
                return index < 10
            })

            setStoriesID(stories);
        }

        getStories();
    }, [storiesID])

    return (
        <h3>Mes news</h3>
    )
}

export {
    NewsList
}
