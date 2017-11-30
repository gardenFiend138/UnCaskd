import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckins();

  }

  render() {

    return(
      <div className='index-container-checkins'>
      {
        this.props.checkins.map(checkin => (
          <CheckinIndexItem
            checkin={checkin}
            checkins={this.props.checkins}
            key={checkin.id}
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
