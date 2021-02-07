import React, {useState, useEffect} from 'react'
import {getTopStoriesID} from "../api/api.news";
import {NewsContainer} from "./NewsContainer";
import '../styles/news.css'

function NewsList() {
    const [storiesID, setStoriesID] = useState([])

    useEffect(() => {
        async function getStories() {
            const stories = await getTopStoriesID();

            const filteredStories = stories.filter((id, index) => {
                return index < 9
            })

            setStoriesID(filteredStories);
        }

        getStories();
    }, [storiesID])

    return (
        <div>
            <h3>Last news</h3>
            <div className="newsList">
                { storiesID && storiesID.map((id, index) => {
                    return (
                            <div key={id}>
                                <NewsContainer storyID={id} />
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export {
    NewsList
}
