import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';
import WhiskeyIndexItem from './whiskey_index_item';

class WhiskeyIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.fetchWhiskies();
    // this.props.fetchTopRatedWhiskies();
  }


// possibly abstract out the 'here page' into it's own presentational
// component
  render() {
  // to remove the array of indices indicating newest whiskies
  let whiskies = this.props.whiskies;
  whiskies.pop();

    return(
      <div className="whiskey-index">
        <div>

          <div className='whiskey-index-header'>
            <div>
              <h1>Whiskies</h1>
            </div>

            <div className='add-whiskey'>
              <h3>Don't see your whiskey?</h3>
              <h3><Link to='whiskies/new'>+  Add New Whiskey</Link></h3>
            </div>
          </div>

          <ul className='whiskey-index-container'>
            {
              whiskies.map(whiskey => (
                <WhiskeyIndexItem
                  key={whiskey.id}
                  editPost={this.props.updatePost}
                  whiskey={whiskey}
                />
              ))
            }
          </ul>

        </div>
      </div>
    );
  }
}
export default WhiskeyIndex;
