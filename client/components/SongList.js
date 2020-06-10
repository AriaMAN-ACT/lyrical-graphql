import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import fetchSongs from "../queries/fetchSongs";

const SongList = ({data: {songs = [], loading}, mutate}) => {
    const renderSongs = songs.map(({title, id}) => (
        <li key={id} className="collection-item">
            {title}
            <i className="material-icons" onClick={() => {
                mutate({
                    variables: {
                        id
                    },
                    refetchQueries: [
                        {
                            query: fetchSongs
                        }
                    ]
                })
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