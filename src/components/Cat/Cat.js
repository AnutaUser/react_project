import React from 'react';
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";

const Cat = () => {
    return (
        <div>
            <button onClick={()=> onHidden}>Delete</button>
        </div>
    );
};

export {Cat};