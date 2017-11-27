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
  console.log(this.props)
    return(
      <div className="whiskey-index">
        <Navbar />
          <div>
            <h1>Whiskies</h1>
              <div>
                Don't see your whiskey here?
              <button>
                <Link to='whiskies/new'>Add Whiskey</Link>
              </button>
              <ul>
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
      </div>
          );
  }
}
export default WhiskeyIndex;
