import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class WhiskeySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.searchWhiskeyDatabase = this.props.searchWhiskeyDatabase.bind(this);
  }

  // componentDidUpdate() {
  //   debugger
  // }

  handleChange(e) {
    e.preventDefault();
    console.log('value', e);

    this.setState({
      query: e
    }, () => this.searchWhiskeyDatabase(this.state.query));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => this.searchWhiskeyDatabase(this.state.query));
  }

  render() {
    return(
      <li><input
        type='text'
        placeholder='What are you drinking?'
        onChange={this.update('query')}
        value={this.state.query}
        /></li>
    );
  }
}

export default WhiskeySearch;
