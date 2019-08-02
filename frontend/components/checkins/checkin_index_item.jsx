import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import CheckinPopover from './popover_checkin_form_container';
import CheckinButtons from './checkin_buttons';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cheer: {},
      buttonClass: 'cheers-button',
      deleteModal: 'delete-modal',
    };

    this.checkins = this.props.checkins ?
                      this.props.checkins :
                      this.props.currentUser.checkins;

  window.checkState = this.checkState.bind(this);
  this.checkIfCheered = this.checkIfCheered.bind(this);
  this.handleClick = this.handleClick.bind(this);

  }

  checkState() {
    console.log('here is the state in the checkin index item: ',
      this.state);
  }


  // componentWillMount() {
  //   this.checkIfCheered();
  // }

  componentDidMount() {
    // this.props.fetchCheckin(this.props.checkin.id);
    this.checkIfCheered();
  }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state.buttonClass !== nextState.buttonClass;
  }

  // componentWillReceiveProps(nextProps) {
  //   this.checkIfCheered(nextProps);
  // }

  checkIfCheered(props = this.props) {
    let cheeredUsers = props.checkin.cheered_users;
    let userId = props.currentLoggedInUser.id;

    if (cheeredUsers && cheeredUsers.includes(this.props.currentLoggedInUser.id)) {
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
    let cheeredUsers = this.props.checkin.cheered_users;
    let userId = this.props.currentLoggedInUser.id;
    let cheered = false;
    let cheerId;

    this.props.checkin.cheers.forEach( cheer => {

      // check to see if the currentUser has liked a checkin;
      // if they have,
      if (cheeredUsers.includes(userId)) {
        cheerId = cheer.id;
        cheered = true;
      }
    });

    if (cheered) {
      this.setState({buttonClass: 'cheers-button'}, () =>
        this.props.deleteCheer(cheerId));

    } else {
      this.setState({buttonClass: 'cheers-button cheers'}, () => {
          this.props.createCheer({
            user_id: this.props.currentLoggedInUser.id,
            checkin_id: this.props.checkin.id,
        });
      });
    }
  }

  editButton() {
    if (this.props.currentLoggedInUser.id === this.props.checkin.user_id) {
      return(
        <div className='checkin-popover-container'>
          <CheckinPopover {...this.props}/>
        </div>
      );
    }
  }

  deleteButton() {
    if (this.props.currentLoggedInUser.id === this.props.checkin.user_id) {
      return(
        <div>
          <button
            className='delete-button'
            onClick={ () => this.setState({deleteModal: 'delete-modal show'})}
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
          {this.deleteModal()}
        </div>
      );
    }
  }

  handleClick() {
    this.props.deleteCheckin(this.props.checkin.id)
      .then(window.scrollTo(0,0))
      .then(this.setState({deleteModal: 'delete-modal'}));
  }

  deleteModal() {
    return(
      <div className='delete-modal-container'>
        <div className={ this.state.deleteModal }>
          <span>Are you sure you want to delete this checkin?</span>
          <span>This action can't be undone.</span>
          <button className='delete-button'
            onClick={ () => this.handleClick() }
              >
              DELETE
          </button>
          <button
            onClick={ () => this.setState({deleteModal: 'delete-modal'}) }
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }


// fix how checkins are passed from profile page to do away with ternaries
  render ()  {
       const checkin = this.props.checkin;
       const username = checkin.username ? checkin.username : this.props.userName;
       const whiskey = checkin.whiskey ? checkin.whiskey : this.props.whiskey;
       // const whiskey = this.props.whiskies[checkin.whiskey_id];
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
            {this.userRatingDisplay()}
            <span className='small-text'>
              Average Rating: {this.averageRating()}
            </span>
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

            <div className='checkin-index-buttons '>
              {this.editButton()}
              {this.deleteButton()}
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

// <div className='checkin-index-buttons '>
//
//   <div className='checkin-index-buttons '>
//     {this.editButton()}
//     {this.deleteButton()}
//     <button
//       onClick={ this.toggleCheers.bind(this) }
//       className={ this.state.buttonClass }
//     >
//       <i className="fa fa-glass" aria-hidden="true"></i>
//       CHEERS!
//     </button>
//   </div>
// </div>
