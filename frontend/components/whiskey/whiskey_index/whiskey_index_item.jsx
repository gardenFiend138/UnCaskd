import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WhiskeyIndexItem = ({ whiskey, updateWhiskey, history}) => {
  return (
    <li>
      <Link to={`/whiskies/${whiskey.id}`}>
        {whiskey.name}
      </Link>
      <Link to={`/whiskies/${whiskey.id}/edit`}>
        Edit
      </Link>
    </li>
  );
};

export default withRouter(WhiskeyIndexItem);
