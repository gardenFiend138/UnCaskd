import React from 'react';
import { Link, withRouter, Redirect } from 'react-router';


class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 1.0,
      redirect: false,
      activeModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.setState = this.setState.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkin = this.state;
    this.props.createCheckin(checkin);

  }

  toggleClass() {
    const currentState = this.state.activeModal;
    this.setState({ activeModal: !currentState});
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

  newCheckinForm() {
    return(
    <div className='new-checkin-form'>

      <div>
        <form>

          <div>

            <label>Body<br/>
              <input type='text'
                onChange={this.update('body')}
                value={this.state.body}
                />
              </label>
          </div>

          <div>
            <label>Rating:
              <input type='text'
                onChange={this.update('rating')}
                value={this.state.rating}
                />
            </label>
          </div>


            <button onClick={this.handleSubmit}>
               Check Me In!
            </button>

        </form>
      </div>
    </div>
    );
  }

  checkinModalForm() {
    return(
      <div className="modal popover-container">
        <form className="modal-form">
          {this.renderErrors()}

          <span className="modal-close js-modal-close" onClick={this.toggleClass}>&times;</span>
            <label>Check In
              <input type="text"
                value={this.state.body}
                placeholder='Why not say something about your whiskey?'
                onChange={this.update('body')}
              />
            </label>

          <div className="submit">
            <button onClick={this.handleSubmit}>Check In!</button>

          </div>

          </form>
        <div className="modal-screen js-modal-close"></div>
      </div>
    );
  }


  render() {

    return(
      <div>

        {this.checkinModalForm()}
      </div>

    );
  }
}

export default withRouter(CheckinForm);
