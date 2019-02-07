import React from 'react';

const Thumbnails = (props) => {
    const { video } = props;
    if (!video) {
        return <p>Loading...</p>
    } else {
        return (
                <div>
                    <span>
                    <img
                    src={video.snippet.thumbnails.default.url}
                    alt="video thumbnail"
                    onClick={function() {return props.changeVideo(video)}}
                    />
                    </span>
                </div>
                )
            }
        }

export default Thumbnails;

