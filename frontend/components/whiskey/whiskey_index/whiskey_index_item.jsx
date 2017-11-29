import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';


const WhiskeyShowPageButtons = ({ whiskey }) => {
  return(
    <li className='edit-button'>
      <button>
        <Link to={`/whiskies/${whiskey.id}/edit`}>
          Edit
        </Link>
      </button>
      <button>
        <Link to={`/checkins/new`}>
          Check In This Whiskey!
        </Link>
      </button>
    </li>
  );
};

const WhiskeyIndexItem = ({ whiskey, updateWhiskey, history }) => {

  return (
    <div className='whiskey-index-item'>

      <div className='whiskey-photo-checkins'>
        <Link to={`/whiskies/${whiskey.id}`}>
          <img
            src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
            alt='whiskey_default_image'
          />
        </Link>
        <div className='checkins'>Total Checkins</div>
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
          <CircularProgressbar percentage={88} />
        </div>
        Average Rating (XXX Reviews)
      </div>

    </div>
  );
};

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
