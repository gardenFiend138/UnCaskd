import * as APIUtil from '../util/checkin_api_util';

export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN_ERRORS = 'RECEIVE_CHECKIN_ERRORS';
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';

export const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
});

export const receiveAllCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

export const receiveCheckinErrors = errors => ({
  type: RECEIVE_CHECKIN_ERRORS,
  errors
});

export const removeCheckin = checkinId => ({
  type: REMOVE_CHECKIN,
  checkinId
});

export const createCheckin = (checkin) => dispatch => (
  APIUtil.createCheckin(checkin).then(checkin => (
    dispatch(receiveCheckin(checkin))
  ), err => (
    dispatch(receiveCheckinErrors(err.responseJSON))
  ))
);

export const updateCheckin = checkin => dispatch => (
  APIUtil.updateCheckin(checkin).then(checkin => (
    dispatch(receiveCheckin(checkin))
  ), err => (
    dispatch(receiveCheckinErrors(err.responseJSON))
  ))
);

export const fetchCheckin = checkinId => dispatch => (
  APIUtil.fetchCheckin(checkinId).then(checkin => (
    dispatch(receiveCheckin(checkin))
  ), err => (
    dispatch(receiveCheckinErrors(err.responseJSON))
  ))
);

export const fetchCheckins = () => dispatch => (
  APIUtil.fetchCheckins().then(checkin => (
    dispatch(receiveAllCheckins(checkin))
  ), err => (
    dispatch(receiveCheckinErrors(err.responseJSON))
  ))
);

export const deleteCheckin = checkinId => dispatch => (
  APIUtil.deleteCheckin(checkinId).then(checkin => (
    dispatch(removeCheckin(checkin))
  ), err => (
    dispatch(receiveCheckinErrors(err.responseJSON))
  ))
);
