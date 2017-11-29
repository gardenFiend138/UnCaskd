import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }
  render ()  {
    
    return(
      <div className='checkin-index-item'>

        <div className='whiskey-photo-checkins'>

          <img
            src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
            alt='user_default_image'
            />

          </div>

          <div>
            Someone!
            is drinking a glass of {this.props.checkin.whiskey_id}.

          </div>

        </div>
      );
    }
}

export default withRouter(CheckinIndexItem);
