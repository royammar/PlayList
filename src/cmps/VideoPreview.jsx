import React from 'react'

export default function VideoPreview({item,getUrl}) {
    return (
        item.id.kind==="youtube#video" &&
        <div className="item-preview">
        <img className="image" onClick={()=>getUrl(item.id.videoId)} src={item.snippet.thumbnails.medium.url} alt=""/>    
        <div className="item-title">{item.snippet.title}</div>
        {/* <div>{item.snippet.description}</div> */}
        </div>

    
    )
}
