import React from 'react';

export const Gate = ({isOpen}) => 
    (
        <div>
            {isOpen ? "Open" : "Closed"}
        </div>
    )