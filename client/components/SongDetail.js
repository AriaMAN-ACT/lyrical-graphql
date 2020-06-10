import React from 'react';
import {graphql} from "react-apollo";

import CreateLyric from "./CreateLyric";
import LyricsList from "./LyricsList";
import fetchSong from "../queries/fetchSong";

const SongDetail = ({data: {song : {title, lyrics} = {}, loading}, id}) => {
    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h3>Details for {title}</h3>
            <LyricsList lyrics={lyrics}/>
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