import * as APIUtil from '../util/cheers_util';

export const RECEIVE_NEW_CHEERS = 'RECEIVE_NEW_CHEERS';

export const receiveNewCheer = cheer => ({
  type: RECEIVE_NEW_CHEERS,
  cheer
});

export const createCheer = cheer => dispatch => {
console.log('heres the cheer in the action', cheer);
  return(
    APIUtil.createCheer(cheer).then( cheer => (
      dispatch(receiveNewCheer(cheer))
    ))
  );
};
