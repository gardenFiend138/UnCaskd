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

  componentWillMount() {
    this.props.clearSessionErrors();
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
      return <Link to="/login">Log me In!</Link>;
    }
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

  clearErrors() {
    this.props.errors = [];
  }

  newUserEmail() {
    if (this.props.formType === 'signup') {
      return(
        <input type="email"
          className="login-input"
          placeholder='e-mail'
          onChange={this.update('email')}
        />
      );
    }
  }

  loginBoxMessage() {
    if (this.props.formType === 'login') {
      return <h1>Welcome Back!</h1>;
    } else {
      return <h1>Welcome to UnCaskd!</h1>;
    }
  }

  loginBoxAction() {
    if (this.props.formType === 'login') {
      return <h3 className='login-box-action'>Sign In</h3>;
    } else {
      return <h3 className='login-box-action'>Create a New Account</h3>;
    }
  }

  loginBoxLowerMessage() {
    if (this.props.formType === 'login') {
      return(
        <p className='login-form login-lower-message'>
          Not a member yet? {this.navLink()}
        </p>
      );
    } else {
      return(
        <p className='login-form login-lower-message'>Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      );
    }
  }

  loginBox() {
    return(
      <div>
        <div className="login-form">
          <br/>
          <Link to='/' className='close-login-form'>&times;</Link>
            {this.renderErrors()}
            {this.loginBoxMessage()}
            {this.loginBoxAction()}

            {this.newUserEmail()}


            <input type="text"

              placeholder='Username'
              onChange={this.update('username')}
              className="login-input"
            />



            <input type="password"

              placeholder='Password'
              onChange={this.update('password')}
              className="login-input"
            />

          <br/>
          <button onClick={this.handleSubmit}>On With it Now</button>
            {this.loginBoxLowerMessage()}
        </div>
      </div>
    );
  }



  render() {
    return(
      <div>
        <div className='motto-container'>
          <div className='motto'>
            <h1>UnCaskd</h1>
            <h5>DISCOVER THE BEST</h5>
          </div>
        </div>
        <div className='login-form-container-parent'>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <span className="session-box">

                <div className='login-message'>
                  {this.loginBox()}

                </div>

              </span>
            </form>
          </div>
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
