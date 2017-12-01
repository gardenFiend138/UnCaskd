import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   totalCheckins: this.state.entities.checkins
    // };
    this.checkins = (this.props.checkins) ? this.props.checkins : this.props.currentUser.checkins

  }

  formatDateTime() {
    let time = (this.props.checkin.time) ?
                 this.props.checkin.time :
                 this.props.checkin.updated_at;

    time = time.split('T');
    return time[0];
  }

  averageRating() {
  // console.log('these are your checkin props: ', this.props)
    // const checkins = this.props.checkins;

    let ratings = [];
    // console.log(checkins)
    this.checkins.map( checkin => ratings.push(checkin.rating));

    if (ratings.length > 0) {
      ratings = ratings.reduce( (prev, curr) => prev + curr);
      ratings = ratings / this.checkins.length;
      return Math.round(ratings);
    } else {
      return this.checkins.length;
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
    console.log('these are your checkin props: ', this.props);
    // console.log('these are your checkin props: ', this.props.whiskey);
    let checkin = (this.props.checkin) ? this.props.checkin : this.props.checkin
    const username = (checkin.username) ? checkin.username : this.props.userName;
    const whiskey = (checkin.whiskey) ? checkin.whiskey : this.props.whiskey;
    const deleteCheckin = (this.props.deleteCheckin) ? this.props.deleteCheckin : this.deleteCheckin
    // const
    return(
      <div className='checkin-index-item'>

        <div className='checkin-info'>
          <div >
            <img className='checkin-user-photo'
              src={`${checkin.image_url}`}
              alt='user_default_image'
            />
         </div>
          <div className='checkin-overview'>
            <Link to={`users/${checkin.user_id}`}>
              {username}&nbsp;
            </Link>
            is drinking a glass of
            <Link to={`whiskies/${checkin.whiskey_id}`} >
              {whiskey}.
            </Link>
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

          <div className='checkin-index-buttons'>
            <div>
              <button className='cheers-button'>CHEERS!</button>
            </div>

          </div>
        </div>

      </div>
      );
    }
}

export default withRouter(CheckinIndexItem);
// below cheers-button closing div tag
// <div>
//   <button className='delete-button' >
//     <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
//   </button>
//   <button className='edit-button'>
//     <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
//   </button>
// </div>
