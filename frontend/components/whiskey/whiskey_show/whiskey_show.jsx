import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';
import WhiskeyForm from '../whiskey_form/whiskey_form_container';
import WhiskeyIndexItem from '../whiskey_index/whiskey_index_item';
import CheckinForm from '../../checkins/checkin_form_container';
import CheckinPopover from '../../checkins/popover_checkin_form_container';
import CircularProgressbar from 'react-circular-progressbar';

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
console.log(document.getElementsByClassName('modal'));
    this.setState({ activeModal: !currentState });
    console.log(this.state);
  }

  componentWillReceiveProps() {
    console.log('will receive props', this.props);
  }

  componentDidMount() {

    this.props.fetchWhiskey(this.props.match.params.id);

  }

  averageRating() {
    const checkins = this.props.whiskey.total_checkins;
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

  totalCheckins() {
     const checkins = this.props.whiskey.total_checkins;
     return checkins.length;
  }

  ratingDisplay() {
    return(
      <div className='whiskey-stats'>
        <div className='rating'>
          <CircularProgressbar
            percentage={this.averageRating()}
            textForPercentage={ (WAT) => `${WAT}`}
            />
        </div>
        <span className='rating-text'>
          Average Rating<br/>({this.totalCheckins()} Reviews)
        </span>
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
        <div className='whiskey-index-item'>

          <div className='whiskey-photo-checkins'>
            <Link to={`/whiskies/${whiskey.id}`}>
              <img
                src={`${whiskey.image_url}`}
                alt='whiskey_default_image'
              />
            </Link>
            <span className='checkins'>{this.totalCheckins()} Total Checkins</span>
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
    </div>


    );
  }
}
// <div>
//   <div>
//   (possible div)
//     <div>
//       picture
//     </div>
//     <div>
//       name, style, abv, total checkins, average rating
//     </div>
//
//     <div>
//       checkin button
//     </div>
//   </div>
//   <div>
//     description
//   </div>
// </div>


export default WhiskeyShow;

// <div>
//   <ul>
//     <li>{whiskey.name}</li>
//     <li>{whiskey.distillery}</li>
//     <li>{whiskey.abv}</li>
//     <li>{whiskey.description}</li>
//   </ul>
// </div>

// <div className="whiskey-show-page">
//
//
//   <div className='whiskey-index-item'>
//     <ul>
//       <li className='whiskey-photo'>
//         <Link to={`/whiskies/${whiskey.id}`}>
//           <img src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
//             alt='whiskey_default_image'
//             />
//         </Link>
//       </li>
//       <li>
//         <ul className='whiskey-info-container'>
//           <div className='whiskey-info'>
//             <li>
//               <Link to={`/whiskies/${whiskey.id}`}>
//                 {whiskey.name}
//               </Link>
//             </li>
//             <li>Distillery: </li>
//             <li>
//
//             <li>Style: </li>
//             <li>ABV: {whiskey.abv}</li>
//
//             </li>
//         </div>
//         </ul>
//       </li>
//       <li >
//
//       <CheckinPopover {...this.props}/>
//
//       </li>
//     </ul>
//     <p>Description: <br/> {whiskey.description}</p>
//   </div>
//
//
//
//   </div>
