import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
  }

  render() {

    let checkins = this.props.checkins;
    checkins = checkins.reverse();

    if (!checkins) {
      return <div>Loading...</div>;
    }

    return(
      <div className='index-container-checkins'>
      {
        checkins.map(checkin => (
          <CheckinIndexItem
            checkin={checkin}
            checkins={checkins}
            key={checkin.id}
            whiskey={checkin.whiskey}
            editCheckin={this.props.updateCheckin}
            deleteCheckin={this.props.deleteCheckin}
          />
        ))
      }
      </div>

    );
  }
}

export default CheckinIndex;
