export const create = whiskey => (
  $.ajax({
    method: 'POST',
    url: 'api/whiskies',
    data: { whiskey }
  })
);

export const update = whiskey => (
  $.ajax({
    method: 'PATCH',
    url: `api/whiskies/${whiskey.id}`,
    data: { whiskey }
  })
);

export const show = whiskeyId => (
  $.ajax({
    method: 'GET',
    url: `api/whiskies/${whiskeyId}`
  })
);

export const index = () => (
  $.ajax({
    method: 'GET',
    url: 'api/whiskies'
  })
);
