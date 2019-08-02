import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';
import WhiskeyForm from '../whiskey_form/whiskey_form_container';
import WhiskeyIndexItem from '../whiskey_index/whiskey_index_item';
import CheckinForm from '../../checkins/checkin_form_container';
import CheckinPopover from '../../checkins/popover_checkin_form_container';
import CircularProgressbar from 'react-circular-progressbar';
import CheckinIndexItem from '../../checkins/checkin_index_item';
import CheckinIndex from '../../checkins/checkin_index';

class WhiskeyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: false
    };

    this.setState = this.setState.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.activeModal;
    this.setState({ activeModal: !currentState });
  }

  componentDidMount() {
    this.props.fetchAllCheers();
    this.props.fetchAllUsers();
    this.props.fetchCheckins();
    this.props.fetchWhiskey(this.props.match.params.id);
  }

  componentWillMount() {
    window.scrollTo(0,0);
  }

  averageRating() {
    const checkins = this.props.whiskey.checkins;
    let ratings = [];
    checkins.map( checkin => ratings.push(checkin.rating));

    if (ratings.length > 0) {
      ratings = ratings.reduce( (prev, curr) => prev + curr);
      ratings = ratings / checkins.length;
      return Math.round(ratings);
    }

    return checkins.length;
  }

  totalCheckins() {
     const checkins = this.props.whiskey.checkins;
     return checkins.length;
  }

  ratingDisplay() {
    return(
      <div className='whiskey-stats'>
        <div className='rating'>
          <CircularProgressbar
            percentage={this.averageRating()}
            initialAnimation={true}
            textForPercentage={ (WAT) => `${WAT}`}
            />
        </div>
        <span className='rating-text'>
          Average Rating<br/>({this.totalCheckins()} Reviews)
        </span>
      </div>
    );
  }

  whiskeyCheckins() {
// console.log('props in the whiskey show', this.props);
    const checkins = this.props.whiskey.checkins;

    return(
      <div className='index-container-checkins-whiskey-show'>
      {
        checkins.map(checkin => (
          <CheckinIndexItem
            checkin={checkin}
            checkins={checkins}
            username={checkin.username}
            currentLoggedInUser={this.props.currentLoggedInUser}
            key={checkin.id}
            whiskey={this.props.whiskey.name}
            editCheckin={this.props.updateCheckin}
            deleteCheckin={this.props.deleteCheckin}
            createCheer={this.props.createCheer}
            deleteCheer={this.props.deleteCheer}
            fetchCheckin={this.props.fetchCheckin}
          />
        ))
      }
      </div>
    );
  }

  render() {

    const whiskey = this.props.whiskey;
    if (!whiskey) {
      return <div>Loading...</div>;
    }
    const showPage = true;

    return(
      <div className='whiskey-show'>
        <div className='whiskey-overview'>

          <div className='whiskey-photo-checkins'>
            <Link to={`/whiskies/${whiskey.id}`}>
              <img
                src={`${whiskey.image_url}`}
                alt='drink_img'
              />
            </Link>
            <span className='checkins'>
              {this.totalCheckins()} Total Checkins
            </span>
          </div>


          <div className='whiskey-info'>
            <li>
              <Link to={`/whiskies/${whiskey.id}`}>
                {whiskey.name}
              </Link>
            </li>
            <li>{whiskey.style}</li>
            <li>ABV: {whiskey.abv}%</li>
          </div>

          <div className='checkin-popover-container'>
            <CheckinPopover {...this.props}/>
          </div>

            {this.ratingDisplay()}

        </div>
        <div className='whiskey-description whiskey-overview'>
          <span>*From the Distiller:</span>
          <span>"{whiskey.description}"</span>
        </div>
        <div>
        </div>
        {this.whiskeyCheckins()}
      </div>


    );
  }
}

export default WhiskeyShow;

// {
// this.props.whiskey.total_checkins.map(checkin => (
//   <CheckinIndexItem
//     checkin={checkin}
//     checkins={this.props.whiskey.total_checkins}
//     key={checkin.id}
//     whiskey={this.props.whiskey}
//   />
// ))
//
// }
