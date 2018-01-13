import * as APIUtil from '../util/cheers_util';

export const RECEIVE_NEW_CHEERS = 'RECEIVE_NEW_CHEERS';

export const receiveCheer = cheer => ({
  type: RECEIVE_NEW_CHEERS,
  cheer
});

export const createCheer = (params) => dispatch => (
  APIUtil.createCheer(params).then( cheer => (
    dispatch(createCheer(cheer))
  ))
);
