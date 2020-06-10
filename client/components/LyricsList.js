import React from 'react';

const LyricsList = ({lyrics}) => {
    const renderLyrics = lyrics.map(({content, id}) => (
        <li key={id} className="collection-item">{content}</li>
    ));

    return (
        <ul className="collection">
            {renderLyrics}
        </ul>
    );
};

export default LyricsList;