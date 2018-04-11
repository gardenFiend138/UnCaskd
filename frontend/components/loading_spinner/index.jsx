import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className='loading-spinner-container'>
        <CircularProgressbar
          percentage={99}
          initialAnimation={true}
          className="loading-spinner"
        />
      </div>
    );
  }
}

export default LoadingSpinner;
