import React from 'react';
import {graphql} from "react-apollo";

import CreateLyric from "./CreateLyric";
import fetchSong from "../queries/fetchSong";

const SongDetail = ({data: {song, loading}, id}) => {
    return loading ?  (
        <div>Loading...</div>
    ) : (
        <div>
            <h3>Details for {song.title}</h3>
            <CreateLyric songId={id}/>
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