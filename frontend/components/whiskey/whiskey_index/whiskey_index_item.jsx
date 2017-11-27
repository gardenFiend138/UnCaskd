import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WhiskeyIndexItem = ({ whiskey, updateWhiskey, history}) => {
  return (
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
        </li>
      </ul>
      <p>Description: <br/> {whiskey.description}</p>
    </div>
  );
};

export default withRouter(WhiskeyIndexItem);
