import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  formatDateTime() {
    let time = this.props.checkin.time;
    time = time.split('T');
    return time[0];
  }

  render ()  {
    let checkin = this.props.checkin
    return(
      <div className='checkin-index-item'>

        <div>

          <img className='whiskey-photo-checkins'
            src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
            alt='user_default_image'
            />
          </div>

          <div>
            {checkin.username} is drinking a glass of {checkin.whiskey}.
          </div>

          <div>
            {this.formatDateTime()}
          </div>

          <div>
            <img className='whiskey-photo-checkins'
              src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
              alt='whiskey_default_image'
              />
          </div>

        </div>
      );
    }
}

export default withRouter(CheckinIndexItem);
