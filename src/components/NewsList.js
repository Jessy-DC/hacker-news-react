import React, {useState, useEffect} from 'react'
import {getTopStoriesID} from "../api/api.news";
import {NewsContainer} from "./NewsContainer";
import '../styles/news.css';
import {LoadingAnimation} from "./LoadingAnimation";

function NewsList() {
    const [storiesID, setStoriesID] = useState([])
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        async function getStories() {
            const stories = await getTopStoriesID();

            const filteredStories = stories.filter((id, index) => {
                return index < 9
            })

            setStoriesID(filteredStories);
            setHidden(true);
        }

        getStories();
    }, [storiesID])

    return (
        <div>
            <h3>Last news</h3>
            <LoadingAnimation hidden={hidden} />
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
