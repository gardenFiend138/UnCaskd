@whiskies.each do |whiskey|
  json.set! whiskey.id do
    json.partial! 'whiskey', whiskey: whiskey
    # json.set! :checkins, whiskey.checkins
  end
end
