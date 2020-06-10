import React from 'react';
import {graphql} from 'react-apollo';

import fetchSongs from "../queries/fetchSongs";

const SongList = ({data: {songs = [], loading}}) => {
    const renderSongs = songs.map(({title, id}) => (
        <li key={id} className="collection-item">{title}</li>
    ));

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="collection">
            {renderSongs}
        </div>
    );
};

export default graphql(fetchSongs)(SongList);