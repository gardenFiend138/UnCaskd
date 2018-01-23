import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderedCheckins: [],
    };

  }

  componentWillMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
    // this.setState({orderedCheckins: this.orderCheckins()});
  }

  orderCheckins() {
console.log('here are the checkins', this.props.checkins);
    let checkins = this.props.checkins;
    let order = checkins.pop();
    console.log('here are the props popping', this.props);
    console.log('here are the checkinsafter popping', this.props.checkins);
    let orderedCheckins = [];

    order.forEach( place => {
      checkins.forEach( checkin => {
        orderedCheckins[place] = checkin;
      });
    });

    return orderedCheckins;
  }

  render() {
    let checkins;

    if (this.props.checkins.length < 1) {
      return <div>Loading...</div>;
    } else {
      checkins = this.orderCheckins();
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
