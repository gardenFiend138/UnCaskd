import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchCheckins();
    this.props.fetchAllUsers();
    this.props.fetchAllCheers();
  }

  // componentDidUpdate() {
  //   this.props.fetchCheckins();
  //   // this.props.fetchAllUsers();
  //   // this.props.fetchAllCheers();
  // }

  orderCheckins() {
    console.log('props in the checkin index', this.props);
    let checkins = this.props.checkins;
    let order = this.props.recentCheckins;
    let orderedCheckins = [];
// debugger
    order.forEach( place => {
      orderedCheckins.push(checkins[place + 1]);
    });
    // debugger
    return orderedCheckins;
  }

  render() {

    // let checkins = this.orderCheckins().bind(this);
    let checkins = this.props.checkins;
    // checkins.pop();
    checkins.reverse();

    if (!checkins) {
      return <div>Loading...</div>;
    }
console.log('props in the checkin index', this.props);
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
