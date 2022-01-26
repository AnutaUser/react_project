import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from 'react-router-dom';

import {userService} from '../../services';
import css from './UserDetails.module.css';

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userService.getById(id).then(value => setUser({...value}));
    }, []);

    return (
        <div>
            {user && (
                <div className={css.SingleUser}>
                    <h3>Id: {user.id}</h3>
                    <h2>Name: {user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address:
                        <p className={css.SingleUserAddress}>Street: {user.address.street}</p>
                        <p className={css.SingleUserAddress}>Suite: {user.address.suite}</p>
                        <p className={css.SingleUserAddress}>City: {user.address.city}</p>
                        <p className={css.SingleUserAddress}>Zipcode: {user.address.zipcode}</p>
                        <p className={css.SingleUserAddress}>Geo:
                            <p className={css.SingleUserAddressGeo}>Lat: {user.address.geo.lat}</p>
                            <p className={css.SingleUserAddressGeo}>Lng: {user.address.geo.lng}</p>
                        </p>
                    </p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company:
                        <p className={css.SingleUserAddress}>Name: {user.company.name}</p>
                        <p className={css.SingleUserAddress}>CatchPhrase: {user.company.catchPhrase}</p>
                        <p className={css.SingleUserAddress}>Bs: {user.company.bs}</p>
                    </p>
                    <div>
                        <Link to={'posts'}>
                            <button>Posts</button>
                        </Link>
                    </div>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};