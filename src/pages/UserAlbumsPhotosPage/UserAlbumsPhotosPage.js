import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import css from './UserAlbumsPhotos.module.css';
import {photoService} from '../../services';
import {Photo} from '../../components';

const UserAlbumsPhotosPage = () => {
    const {albumId} = useParams();
    console.log(albumId)

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getByAlbumId(albumId).then(value => setPhotos(value));
    }, [albumId]);

    return (
        <div className={css.UserAlbumsPhoto}>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {UserAlbumsPhotosPage};