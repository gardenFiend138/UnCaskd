import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   totalCheckins: this.state.entities.checkins
    // };

  }

  formatDateTime() {
    let time = (this.props.checkin.time) ?
                 this.props.checkin.time :
                 this.props.checkin.updated_at;

    time = time.split('T');
    return time[0];
  }

  averageRating() {

    const checkins = this.props.checkins;
    let ratings = [];
    checkins.map( checkin => ratings.push(checkin.rating));

    if (ratings.length > 0) {
      ratings = ratings.reduce( (prev, curr) => prev + curr);
      ratings = ratings / checkins.length;
      return Math.round(ratings);
    } else {
      return checkins.length;
    }
  }

  UserRatingDisplay() {
    return(
      // <div className='whiskey-stats'>
        <div className='rating'>
          <CircularProgressbar
            percentage={this.props.checkin.rating}
            textForPercentage={ (WAT) => `${WAT}`}
            />
        </div>
      // </div>
    );
  }

  render ()  {
    let checkin = this.props.checkin;

    return(
      <div className='checkin-index-item'>

        <div className='checkin-info'>
          <div >
            <img className='checkin-user-photo'
              src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
              alt='user_default_image'
            />
         </div>
          <div className='checkin-overview'>
            {checkin.username} is drinking a glass of {checkin.whiskey}.
          </div>
          <div >
            <img className='checkin-whiskey-photo'
              src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
              alt='whiskey_default_image'
            />
          </div>
        </div>

        <div className='checkin-review'>
          <div className='checkin-rating'>
            {this.UserRatingDisplay()}
            <span className='small-text'>Average Rating: {this.averageRating()} </span>
          </div>

          <div className='checkin-description'>
            {checkin.body}
          </div>
        </div>


        <div className='checkin-index-item-footer'>
          <span className='small-text'>
            {this.formatDateTime()}
          </span>
          <div >
            <button className='cheers-button'>CHEERS!</button>
          </div>
        </div>

      </div>
      );
    }
}

export default withRouter(CheckinIndexItem);
