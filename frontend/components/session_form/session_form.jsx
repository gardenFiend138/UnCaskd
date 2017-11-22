import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const actionType = () => {
  //   if (this.props.formType === 'login') {
  //     return 'Sign In!';
  //   }
  //   return 'Sign Up!';
  // }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.nap((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className='login-box-form'>
          Welcome to UnCaskd!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
            <label>Username:
              <input type='text'
                value={this.state.username}
                onChange={this.update('username')}
                className='login-input'
              />
          </label>
            <br/>
              <label>Password:
                <input type='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='login-input'
                />
            </label>
            <br/>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
