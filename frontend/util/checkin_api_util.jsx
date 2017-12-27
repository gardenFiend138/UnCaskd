export const createCheckin = (checkin) => (
  $.ajax({
    method: 'POST',
    url: '/api/checkins',
    data: { checkin }
  })
);

export const updateCheckin = checkin => (
  $.ajax({
    method: 'PATCH',
    url: `/api/checkins/${checkin.id}`,
    data: { checkin }
  })
);

export const fetchCheckins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/checkins'
  })
);

export const fetchCheckin = checkinId => (
  $.ajax({
    method: 'GET',
    url: `/api/checkins/${checkinId}`
  })
);

export const deleteCheckin = checkinId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/checkins/${checkinId}`
  })
);

export const checkinsByUser = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
);

// export const fetchUserCheckins = userId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}`,
//     data: {  }
//   })
// );
