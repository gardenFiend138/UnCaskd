@checkins.each do |checkin|
  json.set! checkin.id do
    json.partial! 'checkin', checkin: checkin
  end
end

# new below here
# @checkins_by_user.each do |user_checkin|
#   json.set! user_checkin.id do
#     json.partial! 'user_checkin', user_checkin: user_checkin
#   end
# end
