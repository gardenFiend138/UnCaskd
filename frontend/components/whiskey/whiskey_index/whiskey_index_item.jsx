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

  // whiskeyShowPageButtons({ whiskey }) {
  //   return(
  //     <li className='edit-button'>
  //       <button>
  //         <Link to={`/whiskies/${whiskey.id}/edit`}>
  //           Edit
  //         </Link>
  //       </button>
  //       <button>
  //         <Link to={`/checkins/new`}>
  //           Check In This Whiskey!
  //         </Link>
  //       </button>
  //     </li>
  //   );
  // }

  // componentDidMount()  {
  //   let prevState = this.state;
  //   this.setState((prevState, this.averageRating()) => {
  //     return{averageRating: prevState.averageRating}
  //   });
  // }

  averageRating() {
    const checkins = this.props.whiskey.total_checkins;
    let ratings = [];
    checkins.map( checkin => ratings.push(checkin.rating));

    if (ratings.length > 0) {
      ratings = ratings.reduce( (prev, curr) => prev + curr);
      ratings = ratings / checkins.length;
      return ratings;
    } else {
      return 'Be the first to check in!';
    }
  }

  totalCheckins() {
     const checkins = this.props.whiskey.total_checkins;
     return checkins.length;
  }

  render() {

    const whiskey = this.props.whiskey
    // const overallRating = this.averageRating();
    return (
      <div className='whiskey-index-item'>

        <div className='whiskey-photo-checkins'>
          <Link to={`/whiskies/${whiskey.id}`}>
            <img
              src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
              alt='whiskey_default_image'
            />
          </Link>
          <div className='checkins'>{this.totalCheckins()} Total Checkins</div>
        </div>


        <div className='whiskey-info'>
          <li>
            <Link to={`/whiskies/${whiskey.id}`}>
              {whiskey.name}
            </Link>
          </li>
          <li>Distillery: </li>
          <li>Style: </li>
          <li>ABV: {whiskey.abv}%</li>
        </div>

        <div className='whiskey-stats'>
          <div className='rating'>
            <CircularProgressbar percentage={this.averageRating()} />
          </div>
          Average Rating (XXX Reviews)
        </div>

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
