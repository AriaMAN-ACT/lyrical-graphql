import React, {useState} from 'react';
import {graphql} from "react-apollo";
import gql from 'graphql-tag';

const CreateSong = ({mutate}) => {
    const [song, setSong] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        mutate({
            variables: {
                title: song
            }
        })
    };

    return (
        <div>
            <h3>Create Song</h3>
            <form onSubmit={onSubmit}>
                <label>Song:</label>
                <input value={song} onChange={({target: {value}}) => setSong(value)} type="text"/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
            title
        }
    }
`;

export default graphql(mutation)(CreateSong);