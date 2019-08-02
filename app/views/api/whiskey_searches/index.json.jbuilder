@whiskey_search.each do |whiskey|
  json.set! whiskey.id do
    json.extract! whiskey, :id, :name, :image_url
  end
end
