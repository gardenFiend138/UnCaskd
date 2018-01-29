import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

    window.getState = this.getState;

  }

// had as 'will mount' and was rendering nerw checkin then not rendering it again
  componentDidMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
  }

// WTF?! why is the fetch taking so long...new bug now...
  // componentWillMount() {
  //   this.props.fetchCheckins();
  //   this.props.fetchAllUsers();
  //   this.props.fetchAllCheers();
  // }

  // componentDidUpdate() {
  //   this.props.fetchCheckins();
  //   this.props.fetchAllUsers();
  //   this.props.fetchAllCheers();
  // }

  orderCheckins() {
    console.log('checkinsin the props', this.props.checkins);
    if (this.props.checkins.length > 0) {
      let checkins = this.props.checkins[0];
      let order = this.props.recentCheckins;
      let orderedCheckins = [];

      order.forEach( place => {
        orderedCheckins.push(checkins[place]);
      });

      return orderedCheckins;
    }
  }

  render() {
    // debugger
    let checkins = this.orderCheckins();

    if (!checkins) {
      return <div>Loading...</div>;
    }
console.log('heres your checkin in the index for error', checkins);
    return(
      <div className='index-container-checkins'>
      {
        checkins.map(checkin => (
          <CheckinIndexItem
            checkin={checkin}
            checkins={checkins}
            key={checkin.id}
            whiskey={checkin.whiskey}
            editCheckin={this.props.updateCheckin}
            deleteCheckin={this.props.deleteCheckin}
            createCheer={this.props.createCheer}
            deleteCheer={this.props.deleteCheer}
            currentLoggedInUser={this.props.currentLoggedInUser}
            fetchCheckins={this.props.fetchCheckins}
          />
        ))
      }
      </div>

    );
  }
}

export default CheckinIndex;


//
// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import CheckinIndexItem from './checkin_index_item';
//
// class CheckinIndex extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       orderedCheckins: [],
//     };
//
//   }
//
//   componentWillMount() {
//     this.props.fetchCheckins();
//     this.props.fetchAllUsers();
//     this.props.fetchAllCheers();
//   }
//
//   orderCheckins() {
//     console.log('checkins in order checkins fn', this.props.checkins);
//     console.log('order in order checkins fn', this.props.recentCheckins);
//     let checkins = this.props.checkins;
//     let order = this.props.recentCheckins;
//     let orderedCheckins = [];
//
//     order.forEach( place => {
//       // checkins.forEach( checkin => {
//         orderedCheckins.push(checkins[place + 1]);
//         // orderedCheckins[place] = checkin;
//       // });
//     });
//
//     return orderedCheckins;
//   }
//
//   render() {
//     console.log('ordered checkins', this.props.orderedCheckins);
//     let checkins = this.props.checkins;
//
//     if (!checkins) {
//       return <div>Loading...</div>;
//     }
//     // } else {
//     //   checkins = this.props.checkins;
//     //   // checkins = this.orderCheckins();
//     // }
//
//     return(
//       <div className='index-container-checkins'>
//       {
//         checkins.map(checkin => (
//           <CheckinIndexItem
//             checkin={checkin}
//             checkins={checkins}
//             key={checkin.id}
//             whiskey={checkin.whiskey}
//             editCheckin={this.props.updateCheckin}
//             deleteCheckin={this.props.deleteCheckin}
//             createCheer={this.props.createCheer}
//             deleteCheer={this.props.deleteCheer}
//             currentLoggedInUser={this.props.currentLoggedInUser}
//             fetchCheckins={this.props.fetchCheckins}
//           />
//         ))
//       }
//       </div>
//
//     );
//   }
// }
//
// export default CheckinIndex;
//
//
//
