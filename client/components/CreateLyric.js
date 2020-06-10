import React, {useState} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const CreateLyric = ({mutate, songId}) => {
    const [content, setContent] = useState('');

    const onSubmit = ({preventDefault}) => {
        preventDefault();

        mutate({
            variables: {
                content,
                songId
            }
        }).then(() => setContent(''));
    };

    return (
        <form>
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
            lyrics {
                content
            }
        }
    }
`;

export default graphql(mutation)(CreateLyric);