import React from 'react';

const VideoItem = ({video , onVideoSelect}) => (     
    
    <div className="w-full">
    <div onClick={() => onVideoSelect(video)} class="flex flex-wrap w-full mb-3">
        <div class="mt-4 lg:mt-0 justify-center pb-2 cursor-pointer flex flex-row items-center w-full">
            <img className="w-1/2" src={video.snippet.thumbnails.medium.url} alt="youtube" />
            <div class="w-1/2 pl-2 flex">
              <h3 class="text-base mb-2">{video.snippet.title}</h3>
              <p class="text-sm text-grey-darken mb-1">Chanel</p>
              <p class="text-sm text-grey-darken mb-1">13K views</p>
            </div>
          </div>
    </div>
    </div>
);

export default VideoItem;

/*  <div class="flex flex-wrap w-full mb-3">
            <img src={video.snippet.thumbnails.medium.url} alt="youtube" />
            <div class="w-1/2 pl-2">
              <h3 class="text-base mb-2">{video.snippet.title}</h3>
              <p class="text-sm text-grey-darken mb-1">Chanel</p>
              <p class="text-sm text-grey-darken mb-1">13K views</p>
            </div>
          </div> */

