import React from 'react';

export const MediaCard = ({title,body,imageUrl}) => 
            (
                <div>
                     {title}
                    <img src={imageUrl} alt =""/>
                    <p>{body}</p>
                </div>
            )