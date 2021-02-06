import React, {useState, useEffect} from 'react'
import {getTopStoriesID} from "../api/api.news";
import {NewsContainer} from "./NewsContainer";

function NewsList() {
    const [storiesID, setStoriesID] = useState([])

    useEffect(() => {
        async function getStories() {
            const stories = await getTopStoriesID();

            const filteredStories = stories.filter((id, index) => {
                return index < 10
            })

            setStoriesID(filteredStories);
        }

        getStories();
    }, [storiesID])

    return (
        <div>
            <h6>Top 10 news</h6>
            <div>
                { storiesID && storiesID.map((id, index) => {
                    return <NewsContainer storyID={id} />
                })}
            </div>
        </div>
    )
}

export {
    NewsList
}
