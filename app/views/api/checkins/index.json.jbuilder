@checkins.each do |checkin|
  json.set! checkin.id do
    json.partial! 'checkin', checkin: checkin
  end
end

# json.array! checkin.cheers do |cheer|
#   json.pluck! cheer.id
# end
