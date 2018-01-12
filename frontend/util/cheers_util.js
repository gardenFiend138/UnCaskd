export const createCheer = (params) => (
  $.ajax({
    method: 'POST',
    url: 'api/cheers',
    data: { params }
  })
);

export const deleteCheer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheers/${id}`,
  })
);
