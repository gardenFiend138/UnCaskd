import React from 'react';
import { Link, withRouter } from 'react-router';

class WhiskeyForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      abv: '',
      description: '',
      image_url: 'null',
      style_id: '1',
      distillery_id: '1'

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
    this.props.processForm(whiskey);
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

  newWhiskeyForm() {
    return(
    <div>
      <form>

      <label>Whiskey Name:
        <input type='text'
          onChange={this.update('name')}
          value={this.state.name}
          />
        </label>

      <label>ABV:
        <input type='text'
          onChange={this.update('abv')}
          value={this.state.abv}
          />
        </label>

      <label>Description:
        <input type='text'
          onChange={this.update('description')}
          value={this.state.description}
          />
      </label>

      <button onClick={this.handleSubmit}>
         Add Whiskey

        </button>

      </form>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.newWhiskeyForm()}
      </div>

    );
  }
}

export default withRouter(WhiskeyForm);
