@cheers.each do |cheer|
  json.set! cheer.id do
    json.extract! cheer, :id, :user_id, :checkin_id
  end
end
