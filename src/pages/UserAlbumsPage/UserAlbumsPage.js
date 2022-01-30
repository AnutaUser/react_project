import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import css from './UserAlbums.module.css';
import {albumService} from '../../services';
import {Album} from '../../components';

const UserAlbumsPage = () => {

    const {userId} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getByUserId(userId).then(value => console.log(setAlbums([...value])))
    }, [userId]);

    return (
        <div className={css.UserAlbums}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export {UserAlbumsPage};
