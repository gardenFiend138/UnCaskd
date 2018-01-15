export const createCheer = cheer => (
  $.ajax({
    method: 'POST',
    url: 'api/cheers',
    data: { cheer }
  })
);

export const deleteCheer = cheerId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheers/${cheerId}`,
  })
);
