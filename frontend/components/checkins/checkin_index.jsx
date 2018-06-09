import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import LoadingSpinner from '../loading_spinner';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // window.scrollTo(0, 0);
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

  render() {
    const { checkins } = this.props;

    return(
      <div className='index-container-checkins'>
      { !checkins &&
          <LoadingSpinner />
      }
        { checkins &&
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
    );
  }
}

export default CheckinIndex;
