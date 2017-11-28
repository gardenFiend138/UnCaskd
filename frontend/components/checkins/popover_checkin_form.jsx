import React from 'react';
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('current props', this.props);

    const checkin = this.state;
    console.log('checkin: ', checkin);
    // where is our whiskey Id?
    this.props.processForm(checkin);
    this.props.history.push('/whiskies');
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
    return (
      <div className="popover-container" ref={node => { this.node = node; }}>
        <button onClick={this.handleClick} >
          Checkin In This Whiskey!
        </button>
        {this.state.popupVisible && (

          <div className="popover" >
            <div className="modal is-open">
              <form className="modal-form">

                <span className="modal-close js-modal-close">&times;</span>
                  {this.renderErrors()}

                  <label>Comment
                    <input type="text"
                      value={this.state.body}
                      onChange={this.update('body')}
                    />
                  </label>

                  <div className='rating-slider'>Rating Slider Goes Here</div>

                <div className="submit">
                  <button onClick={e => this.handleSubmit(e)}>Check In!</button>

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
