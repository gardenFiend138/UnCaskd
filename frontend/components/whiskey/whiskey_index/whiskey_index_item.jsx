import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WhiskeyIndexItem = ({ whiskey, updateWhiskey, history}) => {
  return (
    <div>
    <ul>
      <li>
        <Link to={`/whiskies/${whiskey.id}`}>
          {whiskey.name}
        </Link>
        <Link to={`/whiskies/${whiskey.id}/edit`}>
          Edit
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default withRouter(WhiskeyIndexItem);
