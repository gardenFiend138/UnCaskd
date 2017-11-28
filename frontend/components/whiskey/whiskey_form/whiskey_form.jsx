import React from 'react';
import { Link, withRouter, Redirect } from 'react-router';

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
    <div className='new-whiskey-form'>
      <div>
        <form>

          <div>
            <label>Whiskey Name:
              <input type='text'
                onChange={this.update('name')}
                value={this.state.name}
                />
              </label>
          </div>

          <div>
            <label>Abv:<br/>
              <input type='text'
                onChange={this.update('abv')}
                value={this.state.abv}
                />
              </label>
          </div>

          <div>
            <label>Description:
              <input type='text'
                onChange={this.update('description')}
                value={this.state.description}
                />
            </label>
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
