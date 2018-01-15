export const createCheer = cheer => (
  $.ajax({
    method: 'POST',
    url: 'api/cheers',
    data: { cheer }
  })
);

export const deleteCheer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheers/${id}`,
  })
);
