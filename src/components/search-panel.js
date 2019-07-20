import React from 'react';

const SearchPanel = () => {
    const writeText = 'Write here to search';
    const searchStyle = {
        fontSize: '18px'
    };

    return <input
        placeholder={writeText}
        style={searchStyle} />;
};

export default SearchPanel;