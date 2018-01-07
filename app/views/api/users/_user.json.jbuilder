json.extract! user, :id, :username, :image_url


# add checkins above to get checkins in state for current user;
# need to make new jbuilder for all users though

# json.set! :whiskey do
#   user.whiskey.each do |whiskey|
#     json.set! whiskey.id, whiskey.name
#   end
# end
#
# json.set! :checkins do
#   json.array! user.checkins do |checkin|
#     json.set! :name, checkin.whiskey.name
#     # json.set! :image_url, checkin.whiskey.image_url
#     json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id
#   end
# end
