async function getTopStoriesID() {
    const TOP_STORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    const responseData = fetch(TOP_STORIES_ENDPOINT).then(res => res.json())
    return responseData;
}

async function getStoryFromID(storyId = 0) {
    if(storyId == 0) {
        throw new Error("ID is required for fetch story")
    }

    const STORY_DATA_ENDPOINT = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    const responseData = fetch(STORY_DATA_ENDPOINT).then(res => res.json())
    return responseData;
}

export {
    getTopStoriesID,
    getStoryFromID
}
