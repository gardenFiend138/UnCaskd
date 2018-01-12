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
      image_url: '',
      style: '',
      distillery_id: '1',
      redirect: false

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUnmount() {
  //   this.clearErrors();
  // }

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

      {this.renderErrors()}
      <form>

        <div>

            <input type='text'
              onChange={this.update('name')}
              value={this.state.name}
              placeholder='Whiskey Name'
              />

              <input type='text'
                onChange={this.update('abv')}
                value={this.state.abv}
                placeholder='ABV (ex.- 45%)'
                />

        </div>

        <div>
          
            <input type='text'
              onChange={this.update('style')}
              value={this.state.style}
              placeholder='Style (i.e.- Scotch, Bourbon)'
            />
          
          

            <input type='text'
              onChange={this.update('image_url')}
              value={this.state.image_url}
              placeholder='URL for photo of whiskey logo'
              />
            
        </div>

        <div>
          <input type='text'
            onChange={this.update('description')}
            value={this.state.description}
            placeholder='Description'
          />
        </div>

          <button onClick={this.handleSubmit} className='add-whiskey-button'>
             Add Whiskey
          </button>

      </form>
    </div>
    );
  }

  render() {
    if (this.state.redirect) {
      return  <Redirect to={`/whiskies/${this.state.id}`} />;
    }
    return(
      <div className='new-whiskey-form-container'>
        {this.newWhiskeyForm()}
      </div>

    );
  }
}

export default withRouter(WhiskeyForm);

// use to expand description area
// <textarea type="text"
//   value={this.state.description}
//   onChange={this.update('description')}
  // placeholder='What does the distilery have to say about this whiskey?'
//   />
