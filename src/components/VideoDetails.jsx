import React from 'react'


const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading ...</div>
    }

    const d = new Date(video.snippet.publishedAt);
    let date = d.toDateString();

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div className="w-full md:flex-1">
            <div className="iframe-container"><iframe src={videoSrc} title={video.snippet.title}></iframe></div>
            <div className="border-gray-300 border-2 p-2 mt-2">
                <p className="text-xs text-blue-600">#Kampala #MyCity #PartyPeople</p>
                <h4 className="text-lg font-semibold">{video.snippet.title}</h4>
                <p className=" text-gray-500 text-base">9,620,226 views . {date}</p>
            </div>
        </div>
    )
}

export default VideoDetail;