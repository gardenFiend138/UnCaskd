import React from 'react';
import Slider from 'react-rangeslider';

import { Link, withRouter, Redirect } from 'react-router';

class CheckinPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      body: '',
      rating: 1.0,
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

  handleChangeStart() {

    console.log('Change event started');
  }

  handleChange(value) {
    console.log('change event entered');
    this.setState({
      sliderValue: value
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkin = this.state;
    this.props.processForm(checkin);
    this.handleClick();
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
                      placeholder='So...how is it?'
                    />


                  <div>
                    <Slider
                      min={0}
                      max={100}
                      value={rating}
                      onChangeStart={this.handleChangeStart.bind(this)}
                      orientation="horizontal"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>

                <div className="submit">
                  <button onClick={this.handleSubmit}>Check In!</button>

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
