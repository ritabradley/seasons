import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        displayText: "Sun's out, buns out!",
        iconClass: 'sun outline',
        iconColor: 'orange'
    },
    winter: {
        displayText: 'I feel an icicle forming under my nose!',
        iconClass: 'snowflake outline',
        iconColor: 'blue'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const { displayText, iconClass, iconColor } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconColor} ${iconClass} icon`} />
            <h1>{displayText}</h1>
            <i className={`icon-right massive ${iconColor} ${iconClass} icon`} />
        </div>
    );
};

export default SeasonDisplay;
