import React, {useState} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import fetchSongs from "../queries/fetchSongs";

const SongList = ({data: {songs = [], loading, refetch}, mutate, selectSong}) => {

    const renderSongs = songs.map(({title, id}) => (
        <li key={id} className="collection-item" onClick={() => selectSong(id)}>
            {title}
            <i className="material-icons" onClick={() => {
                mutate({
                    variables: {
                        id
                    }
                }).then(refetch);
            }}>delete</i>
        </li>
    ));

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="collection">
            {renderSongs}
        </div>
    );
};

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));