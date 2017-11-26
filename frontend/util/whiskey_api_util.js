export const addWhiskey = whiskey => (
  $.ajax({
    method: 'POST',
    url: 'api/whiskies',
    data: { whiskey }
  })
);

export const updateWhiskey = whiskey => (
  $.ajax({
    method: 'PATCH',
    url: `api/whiskies/${whiskey.id}`,
    data: { whiskey }
  })
);

export const fetchWhiskey = whiskeyId => (
  $.ajax({
    method: 'GET',
    url: `api/whiskies/${whiskeyId}`
  })
);

export const fetchWhiskies = data => (
  $.ajax({
    method: 'GET',
    url: 'api/whiskies',
    data
  })
);
