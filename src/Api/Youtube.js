import axios from 'axios';

const KEY = 'AIzaSyAWRgtxkQcxpy4TnzwBnC_0Aw5acv5jsMY';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    Params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

