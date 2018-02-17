import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CheckinPopover from './popover_checkin_form_container';

class CheckinButtons extends React.Compoent {
  constructor(props) {
    // super(props);

    this.state = {
      cheer: {},
      buttonClass: 'cheers-button',
      deleteModal: 'delete-modal',
    };

  }

  editButton() {
    if (this.props.currentLoggedInUser.id === this.props.checkin.user_id) {
      return(
        <div className='checkin-popover-container'>
          <CheckinPopover {...this.props}/>
        </div>
      );
    }
  }

  deleteButton() {
    // debugger
    if (this.props.currentLoggedInUser.id === this.props.checkin.user_id) {
      return(
        <div>
          <button
            className='delete-button'
            onClick={ () => this.setState({deleteModal: 'delete-modal show'})}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          {this.deleteModal()}
        </div>
      );
    }
  }

  deleteModal() {
    return(
      <div className='delete-modal-container'>
        <div className={ this.state.deleteModal }>
          <span>Are you sure you want to delete this checkin?</span>
          <span>This action can't be undone.</span>
          <button className='delete-button'
            onClick={ () => this.props.deleteCheckin(this.props.checkin.id)
              .then(window.scrollTo(0,0))
              .then(this.setState({deleteModal: 'delete-modal'}))
            }
              >
              DELETE
          </button>
          <button onClick={
            () => this.setState({deleteModal: 'delete-modal'})
          }>
            CANCEL
          </button>
        </div>
      </div>
    );
  }

  render() {

    return(
      <div className='checkin-index-buttons '>

        <div className='checkin-index-buttons '>
          {this.editButton()}
          {this.deleteButton()}
          <button
            onClick={ this.toggleCheers.bind(this) }
            className={ this.state.buttonClass }
          >
            <i className="fa fa-glass" aria-hidden="true"></i>
            CHEERS!
          </button>
        </div>
      </div>
    );
  }
}

export default CheckinButtons;
