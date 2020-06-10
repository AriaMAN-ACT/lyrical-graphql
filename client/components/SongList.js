import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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

const query = gql`
    {
        songs {
            id,
            title
        }
    }
`;

export default graphql(query)(SongList);