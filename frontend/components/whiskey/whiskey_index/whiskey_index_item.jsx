import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class WhiskeyIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRating: 0
    };


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
        <div className='rating checkin-rating-circle'>
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

  render() {
    const whiskey = this.props.whiskey

    return (
      <div className='whiskey-index-item'>

        <div className='whiskey-photo-checkins'>
          <Link to={`/whiskies/${whiskey.id}`}>
            <img
              src={`${whiskey.image_url}`}
              alt='whiskey_default_image'
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

        {this.ratingDisplay()}

      </div>
    );
  }
}
export default withRouter(WhiskeyIndexItem);

// <li className='edit-button'>
//   <button>
//     <Link to={`/whiskies/${whiskey.id}/edit`}>
//       Edit
//     </Link>
//   </button>
// </li>

// <div className='whiskey-index-item'>
//   <ul>
//     <li className='whiskey-photo'>
//       <Link to={`/whiskies/${whiskey.id}`}>
//         <img src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
//           alt='whiskey_default_image'
//           />
//       </Link>
//     </li>
//     <li>
//       <ul className='whiskey-info-container'>
//         <div className='whiskey-info'>
//           <li>
//             <Link to={`/whiskies/${whiskey.id}`}>
//               {whiskey.name}
//             </Link>
//           </li>
//           <li>Distillery: </li>
//           <li>
//
//           <li>Style: </li>
//           <li>ABV: {whiskey.abv}</li>
//
//           </li>
//       </div>
//       </ul>
//     </li>
//
//   </ul>
//
// </div>
