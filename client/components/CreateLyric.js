import React, {useState} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import fetchSong from "../queries/fetchSong";

const CreateLyric = ({mutate, songId}) => {
    const [content, setContent] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        mutate({
            variables: {
                content,
                songId
            },
            refetchQueries: [
                {
                    query: fetchSong
                }
            ]
        }).then(() => setContent(''));
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add A Lyric</label>
            <input type="text" value={content} onChange={({target: {value}}) => setContent(value)}/>
            <button type="submit">Create</button>
        </form>
    );
};

const mutation = gql`    
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $sontent, songId: $songId) {
            id
        }
    }
`;

export default graphql(mutation)(CreateLyric);