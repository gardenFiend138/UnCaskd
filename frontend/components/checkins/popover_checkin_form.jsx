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
      whiskeyId: this.props.match.params.id,
      redirect: false,
      update: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    if (this.props.checkin) {
      let checkin = this.props.checkin;

      this.setState({
        body: checkin.body,
        rating: checkin.rating,
        update: true,
      });
    }
  }

  componentWillReceiveProps() {
    if (this.props.checkin) {
      let checkin = this.props.checkin;

      this.setState({
        body: checkin.body,
        rating: checkin.rating,
        update: true,
      });
    }
  }

  // componentWillMount() {
  //   if (this.props.checkin) {
  //     let checkin = this.props.checkin;
  //
  //     this.setState({
  //       body: checkin.body,
  //       rating: checkin.rating,
  //       update: true,
  //     });
  //   }
  // }

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

// rethink this design here; weren't really taking full
// advantage of the outside click for ppover, and not sure I really
// want that behavior anyway; have submit change state to model hidden,
// and set the modal's className using the state instead

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.update) {
      const checkin = {
        body: this.state.body,
        rating: this.state.rating,
        whiskey_id: this.state.whiskeyId,
        id: this.props.checkin.id
      };

      this.props.updateCheckin(checkin);
      // this.setState({popupVisible: false});
      this.handleClick();
        // new Promise( () => this.props.updateCheckin(checkin))
        //   .then(this.setState({popupVisible: false},
        //     () => this.props.history.push('/home'));

    } else {

      const checkin = {
        body: this.state.body,
        rating: this.state.rating,
        whiskey_id: this.state.whiskeyId,
      };

      this.props.createCheckin(checkin);
      // this.setState({popupVisible: false});
      this.handleClick();
      this.props.history.push('/home');
      // new Promise( () => this.props.createCheckin(checkin))
      // .then(this.setState({popupVisible: false},
      //   () => this.props.history.push('/home'));
    }
  }

    // this.state.update ?
    //   this.props.updateCheckin(checkin) :
    //   this.props.createCheckin(checkin);
    // if (this.state.update) {
    //   this.props.updateCheckin(checkin);
    // } else {
    //   this.props.createCheckin(checkin);
    // }
    // this.setState({popupVisible: false}, () => this.props.history.push('/home'));
    // this.props.history.push('/home');
    // this.forecUpdate().bind(this);
  // }

  updateRating(e) {
    // console.log(e);
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

  buttonText() {
    return this.state.update? 'Update Checkin' : 'Check In!';
  }

  toggleButton() {
    console.log('update? ', this.state.update);
    if (this.state.update) {
      return(
        <div className='edit-button' onClick={
          () => window.scrollTo(0,0)}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      );
    }

    return(<div className="checkin-button">Checkin this Whiskey!</div>);
  }

// now working on getting button styling applied conditionally
  render() {
    let { rating } = this.state.rating;

    // console.log('here ua props', this.props)
    return (
      <div className="popover-container" ref={node => { this.node = node; }}>
        <button onClick={this.handleClick}>
          {this.toggleButton()}
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
                    {this.buttonText()}
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

// add in 'label' and 'thumbSize' if you want the tooltip;
// seems to look cleaner with the rating updating in the large
// area below
// <ReactSimpleRange
//   label
//   min={1}
//   max={100}
//   defaultValue={this.state.rating}
//   onChange={ e => this.updateRating(e.value)}
//   onChangeComplete={e => this.handleChange(e.value)}
//   sliderSize={6}
//   thumbSize={18}
//  />

// for the 'add photo button' once that is implemented
// <button className='checkin-photo-upload'>
//   <i className="fa fa-camera-retro fa-3x" aria-hidden="true"></i>
//
//   </button>
