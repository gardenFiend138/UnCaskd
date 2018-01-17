import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cheer: {},
      buttonClass: 'cheers-button',
    };

    this.checkins = (this.props.checkins) ?
                      this.props.checkins :
                      this.props.currentUser.checkins;

  }

  componentDidMount() {
    let cheeredUsers = [];

    this.props.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id);
    });

    console.log('component did mount: ', this.props);
     if (cheeredUsers.includes(this.props.currentUser.id) && this.props.checkin.cheers.length > 0) {
      this.setState({buttonClass: 'cheers-button cheers'});
    } else {
      this.setState({buttonClass: 'cheers-button'});
    }
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
    let cheerId = null;
    // e.preventDefault();

    this.props.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id);
      console.log('cheer in the index item: ', cheer);
      console.log('currentuser in the index item: ', this.props.currentUser);
      // check to see if the currentUser has liked a checkin;
      // if they have,
      if (cheer.user_id === this.props.currentUser.id) {
        cheerId = cheer.id;
        console.log('cheer id here', cheerId);
      }
    });

    if (cheeredUsers.includes(this.props.currentUser.id)) {
      console.log('hit the cheered users fn');
      this.setState({cheer: {}, buttonClass: 'cheers-button'}, () => {
        this.props.deleteCheer(cheerId);
        this.forceUpdate();
        console.log('here is the state in the toggle cheers already cheered', this.state);
      });
    } else {
      this.setState({ cheer: {
        user_id: this.props.currentUser.id,
        checkin_id: this.props.checkin.id}, buttonClass: 'cheers-button cheers'}, () => {
          this.props.createCheer(this.state.cheer);
          this.forceUpdate();
          console.log('here is the state in the toggle cheers new cheers', this.state);
        });
    }

    // console.log('cheers class cheers', this.props.checkin);
    // if (cheeredUsers.includes(this.props.currentUser.id)) {
    //   console.log('they cheersed it');
    //   return 'cheers';
    // }
  }

  // this will toggle the class for the cheers button;
  // if the currentUser has cheersed the checkin, it will
  // return a string, which will be used as the className
  // for the button
//   cheersClass() {
//     console.log('cheers class cheers', this.props.checkin);
//     if (Object.keys(this.state.cheer).length > 0) {
//       console.log('they cheersed it');
//       return 'cheers-button cheers';
//     }
// console.log('they did not cheers it');
//     return 'cheers-button';
//   }

// fix how checkins are passed from profile page to do away with ternaries
  render ()  {
    const checkin = this.props.checkin;
    const username = (checkin.username) ? checkin.username : this.props.userName;
    const whiskey = (checkin.whiskey) ? checkin.whiskey : this.props.whiskey;
    // const deleteCheckin = (this.props.deleteCheckin) ? this.props.deleteCheckin : this.deleteCheckin;

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

          <div className='checkin-index-buttons '>
            <div>
              <button
                onClick={ this.toggleCheers.bind(this) }
                className={ this.state.buttonClass }
              >
              <i class="fa fa-glass" aria-hidden="true"></i>
                CHEERS!
              </button>
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
