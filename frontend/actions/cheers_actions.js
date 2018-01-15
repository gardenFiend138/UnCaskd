import * as APIUtil from '../util/cheers_util';

export const RECEIVE_NEW_CHEERS = 'RECEIVE_NEW_CHEERS';
export const REMOVE_CHEER = 'REMOVE_CHEER';

export const receiveNewCheer = cheer => ({
    type: RECEIVE_NEW_CHEERS,
    cheer
});

export const removeCheer = cheerId => ({
  type: REMOVE_CHEER,
  cheerId
});

export const createCheer = cheer => dispatch => (
  APIUtil.createCheer(cheer).then( cheer => (
    dispatch(receiveNewCheer(cheer))
  ))
);

export const deleteCheer = cheerId => dispatch => (
  APIUtil.deleteCheer(cheerId).then( cheerId => (
    dispatch(removeCheer(cheerId))
  ))
);
