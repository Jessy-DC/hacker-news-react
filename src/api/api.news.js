async function getTopStoriesID() {
    const TOP_STORIES_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    const responseData = fetch(TOP_STORIES_ENDPOINT).then(res => res.json())

    return responseData;
}

export {
    getTopStoriesID
}
