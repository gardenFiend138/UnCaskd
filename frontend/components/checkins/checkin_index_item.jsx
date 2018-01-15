import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cheer: {}
    };

    this.checkins = (this.props.checkins) ?
                      this.props.checkins :
                      this.props.currentUser.checkins;

  }

  formatDateTime() {
    let time = (this.props.checkin.time) ?
                 this.props.checkin.time :
                 this.props.checkin.updated_at;

    time = time.split('T');
    return time[0];
  }

  averageRating() {
    let ratings = [];

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
      <div className='rating'>
        <CircularProgressbar
          percentage={this.props.checkin.rating}
          initialAnimation={true}
          textForPercentage={ (WAT) => `${WAT}`}
          />
      </div>
    );
  }

  toggleCheers() {
    let cheeredUsers = [];
    let cheerId;

    this.props.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id)

      if (cheer.user_id === this.props.currentUser.id) {
        cheerId = cheer.id;
        console.log('cheer id here', cheerId);
      }
    })

    if (cheeredUsers.includes(this.props.currentUser.id)) {
      this.setState({cheer: {}}, () => {
        this.props.deleteCheer(cheerId)
      })

    } else {
      this.setState({ cheer: {
        user_id: this.props.currentUser.id,
        checkin_id: this.props.checkin.id}}, () => {
          this.props.createCheer(this.state.cheer);
        });
    }
  }

  render ()  {
    const checkin = (this.props.checkin) ? this.props.checkin : this.props.checkin
    const username = (checkin.username) ? checkin.username : this.props.userName;
    const whiskey = (checkin.whiskey) ? checkin.whiskey : this.props.whiskey;
    const deleteCheckin = (this.props.deleteCheckin) ? this.props.deleteCheckin : this.deleteCheckin;

    return(
      <div className='checkin-index-item'>
        <div className='checkin-info'>

          <div >
            <img className='checkin-user-photo'
              src={`${checkin.image_url}`}
              alt=''
            />
          </div>

          <div className='checkin-overview'>
            <Link to={`/users/${checkin.user_id}`}>
              {username}&nbsp;
            </Link>
            is drinking a glass of &nbsp;
            <Link to={`/whiskies/${checkin.whiskey_id}`} >
              {whiskey}.
            </Link>
          </div>

          <div >
            <img className='checkin-whiskey-photo'
              src={`${checkin.whiskey_image_url}`}
              alt=''
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
              <button
                className='cheers-button'
                onClick={ this.toggleCheers.bind(this)}
                >CHEERS!</button>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

export default withRouter(CheckinIndexItem);

// cheers button, once implemented
// <div className='checkin-index-buttons'>
//   <div>
//     <button className='cheers-button'>CHEERS!</button>
//   </div>
// </div>
// below cheers-button closing div tag
// <div>
//   <button className='delete-button' >
//     <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
//   </button>
//   <button className='edit-button'>
//     <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
//   </button>
// </div>
