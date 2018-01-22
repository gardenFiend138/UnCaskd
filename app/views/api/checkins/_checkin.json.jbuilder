json.partial! 'checkin', checkin: @checkin, checkins: @checkins


# json.array! checkin.cheers.pluck(:id)
# json.array! checkin.cheers.each do |cheer|
#   json.cheers_ids cheer.pluck(:id)
# end
