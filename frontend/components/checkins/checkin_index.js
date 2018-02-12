import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

// WTF?! why is the fetch taking so long...new bug now...
  componentWillMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
    this.props.fetchWhiskies();
  }

// move this to a selector, along with others
  orderCheckins() {
// debugger
    if (this.props.checkins.length > 0) {
      let checkins = this.props.checkins[0];
      let order = this.props.recentCheckins;
      let orderedCheckins = [];

      order.forEach( place => {
        if (checkins[place]) {
          orderedCheckins.push(checkins[place]);
        }
      });

      return orderedCheckins;
    }
  }

  render() {
    // debugger
    // console.log('checkins in the render of index:', this.props.checkins);
    let checkins = this.orderCheckins();
// console.log('checkins after calling order checkins:', checkins);
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
