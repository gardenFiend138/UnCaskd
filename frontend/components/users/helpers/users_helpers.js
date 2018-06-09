import { userCheckins } from '../../checkins/helpers/checkin_helpers';

export const uniqueCheckins = ({ allUserCheckinIds, checkins }) => {
  const allUserCheckins = userCheckins(allUserCheckinIds, checkins);
  let result = [];

  Object.values(allUserCheckins).forEach((checkin) => {
    if (checkin && !result.includes(checkin.whiskey_id)) {
      result.push(checkin.whiskey_id);
    }
  });

  return result.length;
}
