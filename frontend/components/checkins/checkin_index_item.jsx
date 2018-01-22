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

  window.checkState = this.checkState.bind(this);

  }

  checkState() {
    console.log('here is the state in the checkin index item: ',
      this.state);
  }

  componentWillMount() {
    console.log('current context in index item: ', this);
    console.log('current cheer in index item: ', this.props.checkin);
    let cheeredUsers = [];
// debugger
    this.props.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id);
    });
// debugger
console.log('currentlogged in user', this.props.currentLoggedInUser);
console.log('props in checkin index item', this.props);
     if (cheeredUsers.includes(this.props.currentLoggedInUser.id) && this.props.checkin.cheers.length > 0) {
      this.setState({buttonClass: 'cheers-button cheers'});
    } else {
      this.setState({buttonClass: 'cheers-button'});
    }
  }

  componentWillReceiveProps(nextProps) {
    let cheeredUsers = [];
// debugger
    nextProps.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id);
    });
// debugger
     if (cheeredUsers.includes(this.props.currentLoggedInUser.id) && nextProps.checkin.cheers.length > 0) {
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

  checkinRating() {
    return this.props.checkin.rating;
  }

  userRatingDisplay() {
    return(
      <div className='rating'>
        <CircularProgressbar
          percentage={ this.checkinRating() }
          initialAnimation={true}
          textForPercentage={ (WAT) => `${WAT}`}
          />
      </div>
    );
  }



  // this will toggle the class for the cheers button;
  // if the currentUser has cheersed the checkin, it will
  // return a string, which will be used as the className
  // for the button
  // abstract this function out more; make sure each function does
  // exactly ONE thing!
  toggleCheers() {
    let cheeredUsers = [];
    let cheerId = null;
    // e.preventDefault();
// debugger
    this.props.checkin.cheers.forEach( cheer => {
      cheeredUsers.push(cheer.user_id);
      // check to see if the currentUser has liked a checkin;
      // if they have,
      if (cheer.user_id === this.props.currentLoggedInUser.id) {
        cheerId = cheer.id;
      }
    });
// debugger
    if (cheeredUsers.includes(this.props.currentLoggedInUser.id)) {

      this.setState({buttonClass: 'cheers-button'}, () => {
        this.props.deleteCheer(cheerId);
        this.forceUpdate();
      });
    } else {
      this.setState({buttonClass: 'cheers-button cheers'}, () => {
          this.props.createCheer({
            user_id: this.props.currentLoggedInUser.id,
            checkin_id: this.props.checkin.id});
          this.forceUpdate();
        });
    }
// debugger
  }

// fix how checkins are passed from profile page to do away with ternaries
  render ()  {
    const checkin = this.props.checkin;
    const username = checkin.username ? checkin.username : this.props.userName;
    const whiskey = checkin.whiskey ? checkin.whiskey : this.props.whiskey;
    // const deleteCheckin = (this.props.deleteCheckin) ? this.props.deleteCheckin : this.deleteCheckin;

    // maybe call toggleCheers with this.props.checkin as an argument?

    console.log('checkin in the index item: ', checkin);
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
            {this.userRatingDisplay()}
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
              <i className="fa fa-glass" aria-hidden="true"></i>
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
