import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WhiskeySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  render() {
    return(
      <li><input type='text' placeholder='Search...' /></li>
    );
  }
}

export default WhiskeySearch;
