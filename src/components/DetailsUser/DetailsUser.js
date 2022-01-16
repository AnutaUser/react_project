import React from 'react';

import './DetailsUser.css';

const DetailsUser = ({user:{id, name, email, username, address: {street, suite, city, zipcode, geo:{lat, lng}}, phone, website, company:{companyName, catchPhrase, bs}}, getUserId}) => {

    return (
            <div className={'DetailsUser'}>
                    <h4>Id:{id}</h4>
                    <h2>Name: {name}</h2>
                    <p>Email: {email}</p>
                    <p>Username: {username}</p>
                    <p>Address:
                        <p className={'DetailsUserAddress'}>Street: {street}</p>
                        <p className={'DetailsUserAddress'}>Suite: {suite}</p>
                        <p className={'DetailsUserAddress'}>City: {city}</p>
                        <p className={'DetailsUserAddress'}>Zipcode: {zipcode}</p>
                        <p className={'DetailsUserAddress'}>Geo:
                            <p className={'DetailsUserAddressGeo'}>Lat: {lat}</p>
                            <p className={'DetailsUserAddressGeo'}>Lng: {lng}</p>
                        </p>
                    </p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Company:
                        <p className={'DetailsUserAddress'}>Name: {companyName}</p>
                        <p className={'DetailsUserAddress'}>CatchPhrase: {catchPhrase}</p>
                        <p className={'DetailsUserAddress'}>Bs: {bs}</p>
                    </p>
                    <button onClick={() => getUserId(id)}>Posts</button>
            </div>
    );
};

export default DetailsUser;