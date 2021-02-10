async function getTopStoriesID() {
    const TOP_STORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    const options = {
        method : 'GET',
        headers : {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }


    const responseData = fetch(TOP_STORIES_ENDPOINT, options).then(res => res.json())
    return responseData;
}

async function getStoryFromID(storyId = 0) {
    if(storyId == 0) {
        throw new Error("ID is required for fetch story")
    }

    const options = {
        method : 'GET',
        headers : {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const STORY_DATA_ENDPOINT = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    const responseData = fetch(STORY_DATA_ENDPOINT, options).then(res => res.json())
    return responseData;
}

export {
    getTopStoriesID,
    getStoryFromID
}
