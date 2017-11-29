import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';
import WhiskeyIndexItem from './whiskey_index_item';

class WhiskeyIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchWhiskies();
  }


  render() {

    return(
      <div className="whiskey-index">

        <div>
          <div className='whiskey-index-header'>
            <h1>Whiskies</h1>

            <h3>Don't see your whiskey?</h3>

            <h3><Link to='whiskies/new'>Add New Whiskey</Link></h3>
          </div>
          <ul className='whiskey-index-container'>
            {
              this.props.whiskies.map(whiskey => (
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
