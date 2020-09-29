import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {

    const uTube = videos.map((video) => {
        console.log(videos);
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
    })


    return <div className="w-full md:max-w-xs xl:max-w-full xl:w-1/4 md:pl-5 mt-5 md:mt-0">{uTube}</div>
}

export default VideoList;
