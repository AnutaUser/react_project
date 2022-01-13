import React from 'react';

const Flight = ({mission_name, launch_year, mission_patch_small}) => {
    return (
        <div className={'Flight'}>
            <div className={'NameLaunch'}>
                <h2>{mission_name}</h2>
                <p>{launch_year}</p>
            </div>
            {mission_patch_small}
        </div>
    );
};

export default Flight;