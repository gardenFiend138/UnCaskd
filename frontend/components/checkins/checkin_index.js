import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
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
            createCheer={this.props.createCheer}
            deleteCheer={this.props.deleteCheer}
            currentLoggedInUser={this.props.currentLoggedInUser}
            fetchCheckins={this.props.fetchCheckins}
          />
        ))
      }
      </div>

    );
  }
}

export default CheckinIndex;
