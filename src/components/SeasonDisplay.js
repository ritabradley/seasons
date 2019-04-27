import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat < 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  return (
    <div>
      <h1>
        {season === 'Summer'
          ? "Sun's out, buns out!"
          : 'I feel an icicle forming under my nose!'}
      </h1>
    </div>
  );
};

export default SeasonDisplay;
