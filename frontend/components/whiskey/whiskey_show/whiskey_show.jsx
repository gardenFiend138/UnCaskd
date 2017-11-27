import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';
import WhiskeyForm from '../whiskey_form/whiskey_form_container';
import WhiskeyIndexItem from '../whiskey_index/whiskey_index_item';

class WhiskeyShow extends React.Component {
  componentDidMount() {
    this.props.fetchWhiskey(this.props.match.params.id);
  }



  render() {

    const whiskey = this.props.whiskey;
    if (!whiskey) {
      return <div>Loading...</div>;
    }
    const showPage = true;

    return(
      <div className="whiskey-show-page">
        <Navbar />
<WhiskeyIndexItem whiskey={whiskey} showPage={true} />
        <div className='whiskey-index-item'>
          <ul>
            <li className='whiskey-photo'>
              <Link to={`/whiskies/${whiskey.id}`}>
                <img src='https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg'
                  alt='whiskey_default_image'
                  />
              </Link>
            </li>
            <li>
              <ul className='whiskey-info-container'>
                <div className='whiskey-info'>
                  <li>
                    <Link to={`/whiskies/${whiskey.id}`}>
                      {whiskey.name}
                    </Link>
                  </li>
                  <li>Distillery: </li>
                  <li>

                  <li>Style: </li>
                  <li>ABV: {whiskey.abv}</li>

                  </li>
              </div>
              </ul>
            </li>
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
          </ul>
          <p>Description: <br/> {whiskey.description}</p>
        </div>



        </div>

    );
  }
}

export default WhiskeyShow;

// <div>
//   <ul>
//     <li>{whiskey.name}</li>
//     <li>{whiskey.distillery}</li>
//     <li>{whiskey.abv}</li>
//     <li>{whiskey.description}</li>
//   </ul>
// </div>
