import React from 'react';

export const IndividualImage = (({image})=>{
    return(
        <>
        <div>
            <img
            src= {image.urls.small}
            alt="Unsplash Images"
            />
        </div>
        </>
    )
})
