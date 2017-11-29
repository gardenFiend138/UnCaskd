import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    this.props.fetchCheckins();

  }

  render() {

    return(
      <div className='checkin-index'>

        <ul className='whiskey-index-container'>
        {
          this.props.checkins.map(checkin => (
            <CheckinIndexItem
              checkin={checkin}
              key={checkin.id}
              editCheckin={this.props.updateCheckin}
              deleteCheckin={this.props.deleteCheckin}
            />
          ))
        }

        </ul>
      </div>
    );
  }
}

export default CheckinIndex;
