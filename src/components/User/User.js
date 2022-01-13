import React from 'react';

import './User.css';

const User = (props) => {
    const {id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs} = props;

    return (
        <div className={'User'}>
            <h3>Id: {id}</h3>
            <h2>Name:{name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address:
                <p className={'UserAddress'}>Street: {street}</p>
                <p className={'UserAddress'}>Suite: {suite}</p>
                <p className={'UserAddress'}>City: {city}</p>
                <p className={'UserAddress'}>Zipcode: {zipcode}</p>
                <p className={'UserAddress'}>Geo:
                    <p className={'UserAddressGeo'}>Lat: {lat}</p>
                    <p className={'UserAddressGeo'}>Lng: {lng}</p>
                </p>Geo
            </p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company:
                <p className={'UserCompany'}>Name: {companyName}</p>
                <p className={'UserCompany'}>CatchPhrase: {catchPhrase}</p>
                <p className={'UserCompany'}>Bs: {bs}</p>
            </p>

        </div>

    );

};

export default User;