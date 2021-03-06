// TODO: refactor how checkins are returned by backend
export const orderCheckins = (checkins, recentCheckins) => {
  let orderedCheckins = [];
  if (checkins.length) {
    let allCheckins = checkins[0];
    let order = recentCheckins;

    order.forEach((key) => {
      if (allCheckins[key]) {
        orderedCheckins.push(allCheckins[key]);
      }
    });

    return orderedCheckins;
  }
};

export const userCheckins = (userCheckinIds, checkins) => {
  if (!userCheckinIds || !checkins) return [];
  const allUserCheckins = [];

  userCheckinIds.forEach((id) => {
    allUserCheckins.push(checkins[id]);
  });

  return allUserCheckins;
};
