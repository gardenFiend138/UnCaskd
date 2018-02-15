import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class WhiskeySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      firstKeyDown: true,
      searchVisible: false
    };

    this.searchWhiskeyDatabase = this.props.searchWhiskeyDatabase.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  resetSearch() {
    this.props.searchResults = [];
    this.setState({query: '', firstKeyDown: true});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
      firstKeyDown: false
    }, () => this.searchWhiskeyDatabase(this.state.query));
  }

  handleClick() {
    if (!this.state.searchVisible) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       searchVisible: !prevState.searchVisible,
    }));

    this.resetSearch();
  }

  handleOutsideClick(e) {
    this.handleClick();
  }

  render() {
    let searchResults = this.props.searchResults;

    return(

      <li className='search-container' ref={node => { this.node = node; }}>
        <input
          type='text'
          placeholder='What are you drinking?'
          onChange={this.update('query')}
          value={this.state.query}
          onClick={this.handleClick}
        />
        { this.state.query.length > 0 && !this.state.firstKeyDown &&
          <ul className='search-results'>
            {
              searchResults.map( result => (
                <li key={`${result.id}`}>
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
              {
                searchResults.length < 1 &&
                <li>
                  <Link to={'/whiskies/new'} onClick={this.resetSearch}>
                    <span>+ Add Whiskey</span>
                  </Link>
                </li>
              }
            </ul>

        }
      </li>
    );
  }
}

export default withRouter(WhiskeySearch);
