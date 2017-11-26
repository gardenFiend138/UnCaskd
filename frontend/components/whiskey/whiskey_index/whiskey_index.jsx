import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container';


const WhiskeyIndex = () => {
  debugger;
  return(
    <div className="whiskey-index">
      <Navbar />
      <div>
        <h1>Whiskies</h1>
        <div>
          Don't see your whiskey here?
          <div>

            <ul>
              <li>

              </li>
            </ul>
          </div>
          <button>
          <Link to='whiskies/new'>Add Whiskey</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhiskeyIndex;
