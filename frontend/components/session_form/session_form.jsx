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
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Create an Account!</Link>;
    } else {
      return <Link to="/login">Log Me In!</Link>;
    }
  }

  renderErrors() {

    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  loginBox() {
    return(
      <div className="login-form">
        <br/>
        <Link to='/'>X</Link>
          <label>Email:<br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label><br/>
        <label>Username:<br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
          />
        </label><br/>
        <br/>
        <label>Password:<br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        </label><br/>
        <br/>
        <button><input type="submit" value="Submit" /></button>
      </div>
    );
  }



  render() {
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <span className="session-box">
            Please {this.props.formType} or {this.navLink()}
            {this.renderErrors()}
            {this.loginBox()}
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
