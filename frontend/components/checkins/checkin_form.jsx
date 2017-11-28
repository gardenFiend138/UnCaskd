import React from 'react';
import { Link, withRouter, Redirect } from 'react-router';


class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      body: '',
      rating: 'null',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state);
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

  render() {

    return(
      <div>
        {this.newCheckinForm()}
      </div>

    );
  }
}

export default withRouter(CheckinForm);
