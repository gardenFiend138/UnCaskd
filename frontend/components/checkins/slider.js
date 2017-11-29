import React from 'react';
import ReactSimpleRange from 'react-simple-range';

class RatingSlider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <ReactSimpleRange
        label

        min={1}
        max={100}
        defaultValue={50}
        onChange={e => console.log(e.value)}
       />
    );
  }
}

export default RatingSlider;
