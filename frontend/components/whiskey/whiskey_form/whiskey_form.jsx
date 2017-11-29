import React from 'react';
import { Link, withRouter, Redirect } from 'react-router';
import Navbar from '../../navbar/navbar_container';

class WhiskeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      abv: '',
      description: '',
      image_url: 'null',
      style_id: '1',
      distillery_id: '1',
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
    const whiskey = this.state;
    this.props.processForm(whiskey).then(
      (res) => {

        this.setState({redirect: true, id: res.whiskey.id});
    });
  this.clearErrors();
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

  newWhiskeyForm() {
    return(
    <div className='new-whiskey-form'>

      <div>
        {this.renderErrors()}
        <form>

          <div>
            <label>Whiskey Name:</label>
              <input type='text'
                onChange={this.update('name')}
                value={this.state.name}
                />

          </div>

          <div>
            <label>Abv:</label>
              <input type='text'
                onChange={this.update('abv')}
                value={this.state.abv}
                />

          </div>

          <div>
            <label>Description:</label>
              <input type='text'
                onChange={this.update('description')}
                value={this.state.description}
                />

          </div>


            <button onClick={this.handleSubmit}>
               Add Whiskey
            </button>

        </form>
      </div>
    </div>
    );
  }

  render() {
    if (this.state.redirect) {
      return  <Redirect to={`/whiskies/${this.state.id}`} />;
    }
    return(
      <div>
        {this.newWhiskeyForm()}
      </div>

    );
  }
}

export default withRouter(WhiskeyForm);
