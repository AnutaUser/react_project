import React from "react";

const Movie = ({movie:{id, homepage, original_language, original_title, overview, popularity, poster_path}}) => {
    return (
        <div>
            <div>{homepage}</div>
            <div>Language: {original_language}</div>
            <div>{original_title}</div>
            <div>Popularity: {popularity}</div>
            <div>{poster_path}</div>

        </div>
    );
};

export {Movie};