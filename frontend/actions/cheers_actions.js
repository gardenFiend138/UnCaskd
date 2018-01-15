import * as APIUtil from '../util/cheers_util';

export const RECEIVE_NEW_CHEERS = 'RECEIVE_NEW_CHEERS';

export const receiveNewCheer = cheer => {
console.log('cheer in the action creator', cheer);
  return ({
    type: RECEIVE_NEW_CHEERS,
    cheer
  });
};

export const createCheer = cheer => dispatch => (
  APIUtil.createCheer(cheer).then( cheer => (
    dispatch(receiveNewCheer(cheer))
  ))
);
