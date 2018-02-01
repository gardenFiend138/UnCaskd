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

  componentWillMount() {
    this.resetSearch();
  }

  resetSearch() {
    this.setState({query: ''});
  }

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
    let searchResults = this.props.searchResults;

    return(

      <li className='search-container'>
        <input
          type='text'
          placeholder='What are you drinking?'
          onChange={this.update('query')}
          value={this.state.query}
        />
        { this.state.query.length > 0 &&
          <ul className='search-results'>
            {
              searchResults.map( result => (
                <li>
                  <Link to={`/whiskies/${result.id}`} className='search-result'>
                    <img
                      src={`${result.image_url}`}
                      alt="whiskey_image"
                      className='search-image'
                      />
                      {result.name}
                    </Link>
                  </li>
                ))
              }
            </ul>

        }
      </li>
    );
  }
}

export default WhiskeySearch;
