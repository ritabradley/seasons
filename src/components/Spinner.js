import './Spinner.css';
import React from 'react';

const Spinner = ({ loadingMessage }) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui huge text loader'>{loadingMessage || 'Fetching your location...'}</div>
        </div>
    );
};

export default Spinner;
