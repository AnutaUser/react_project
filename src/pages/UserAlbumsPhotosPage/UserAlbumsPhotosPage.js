import React, {useEffect, useState} from 'react';

import css from './UserAlbumsPhotos.module.css';
import {useParams} from 'react-router-dom';
import {photoService} from '../../services';

const UserAlbumsPhotosPage = () => {
    const {albumId} = useParams();
    console.log(albumId)

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getByAlbumId(albumId).then(value => setPhotos(value));
    }, [albumId]);

    return (
        <div>
            UserAlbumsPhotosPage
        </div>
    );
};

export {UserAlbumsPhotosPage};