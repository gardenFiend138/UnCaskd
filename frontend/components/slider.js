import React, { Component } from 'react'
import Slider from 'react-rangeslider';


class RatingSlider extends React.Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }

  handleChangeStart() {
    console.log('Change event started');
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleChangeComplete() {
    console.log('Change event completed');
  }

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider className="test-slider"
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart.bind(this)}
          onChange={this.handleChange.bind(this)}
          onChangeComplete={this.handleChangeComplete.bind(this)}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default RatingSlider;
