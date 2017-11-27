@whiskies.each do |whiskey|
  json.set! whiskey.id do
    json.partial! 'whiskey', whiskey: whiskey
  end
end 
