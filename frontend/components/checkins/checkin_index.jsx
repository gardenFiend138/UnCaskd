import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';
import CircularProgressbar from 'react-circular-progressbar';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getLoadingPercentage = this.getLoadingPercentage.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
    this.props.fetchWhiskies();
  }

shouldComponentUpdate(nextProps) {
  return nextProps.checkins !== this.props.checkins;
}

// move this to a selector, along with others
  orderCheckins() {
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

  getLoadingPercentage() {
    return (
      <CircularProgressbar
        percentage={99}
        initialAnimation={true}
        textForPercentage={ (WAT) => `${WAT}`}
        className="loading-spinner"
      />
    );
  }

  render() {
    let checkins = this.orderCheckins();

    return(
      <div>
      {!checkins &&
        <div className='rating'>
          {this.getLoadingPercentage()}
        </div>
      }
        <div className='index-container-checkins'>
          {checkins &&
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
                fetchCheckin={this.props.fetchCheckin}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default CheckinIndex;
