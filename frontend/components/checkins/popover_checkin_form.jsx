import React from 'react';
// import RatingSlider from './slider';
import ReactSimpleRange from 'react-simple-range';

import { Link, withRouter, Redirect } from 'react-router';

class CheckinPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      body: '',
      rating: 50,
      whiskey_id: this.props.match.params.id,
      redirect: false,
      sliderValue: 50
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleChange(value) {
    this.setState({
      rating: value
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkin = {
      body: this.state.body,
      rating: this.state.sliderValue,
      whiskey_id: this.state.whiskey_id,
    };
    this.props.processForm(checkin);
    this.props.history.push('/home');
  }

  updateRating(e) {
    console.log(e);
    // e.preventDefault();
    this.setState({rating: e});
  }

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  clearErrors() {
    this.props.errors = [];
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let { rating } = this.state.sliderValue
    return (
      <div className="popover-container" ref={node => { this.node = node; }}>
        <button onClick={this.handleClick} >
          Checkin In This Whiskey!
        </button>
        {this.state.popupVisible && (

          <div className="popover" >
            <div className="modal is-open">
              <form className="modal-form">

                <span className="modal-close js-modal-close" onClick={this.handleClick}>&times;</span>
                  {this.renderErrors()}

                <label></label>
                <textarea type="text"
                  value={this.state.body}
                  onChange={this.update('body')}
                  placeholder='Tasting Notes: nose, palate, body, balance, finish, etc.'
                />


                <div className='rating-slider'>
                  <ReactSimpleRange
                    label
                    min={1}
                    max={100}
                    defaultValue={this.state.rating}
                    onChange={ e => this.updateRating(e.value)}
                    onChangeComplete={e => this.handleChange(e.value)}
                    sliderSize={6}
                    thumbSize={18}
                   />
                </div>

                <div className="checkin-buttons">
                  <button to='/api/checkins' className='checkin-submit' onClick={this.handleSubmit}>
                    Check In!
                  </button>
                  <div className='rating-preview-container'>
                    <label>Your Rating</label>
                    <span className='rating-preview'>{this.state.rating}</span>
                  </div>
                </div>


              </form>
              <div className="modal-screen js-modal-close"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(CheckinPopover);

// for the 'add photo button' once that is implemented
// <button className='checkin-photo-upload'>
//   <i className="fa fa-camera-retro fa-3x" aria-hidden="true"></i>
//
//   </button>
