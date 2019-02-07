import React from 'react';

const Frame = (props) => {
    const { video } = props;
    if (!video) {
        return <div>Loading....</div>
    } else {
        return (
            <iframe
            width='480px'
            height='360px'
            src={`https://youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            />
            /*<div>{video.id.videoId}</div>*/
        ); 
    }

}

export default Frame;