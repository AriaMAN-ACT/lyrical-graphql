import React from 'react';
import {graphql} from "react-apollo";

import fetchSong from "../queries/fetchSong";

const SongDetail = ({data: {song, loading}}) => {
    return loading ?  (
        <div>Loading...</div>
    ) : (
        <div>
            <h3>Details for {song.title}</h3>
        </div>
    );
};

export default graphql(fetchSong, {
    options: ({id}) => ({
        variables: {
            id
        }
    })
})(SongDetail);