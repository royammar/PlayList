import React from 'react'
import VideoPreview from './VideoPreview'

export default function VideoList({playList,getUrl}) {
    return (
        <div className="list-wrapper">
        {playList.map(item=> <VideoPreview key={item.id.videoId}  getUrl={getUrl} item={item}></VideoPreview>
        )}
        </div>
       
    )
}
