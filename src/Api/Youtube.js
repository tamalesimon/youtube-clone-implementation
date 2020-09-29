import axios from 'axios';

const KEY = 'AIzaSyCSllp1U52r2cWHFG8pH1MtWMgg38WmBlE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

