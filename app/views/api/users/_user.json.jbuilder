# json.partial! 'users', users: @users #, users: @users

json.extract! user, :id, :username, :image_url

# json.set! :checkins do
#   json.array! user.checkins do |checkin|
#     json.set! :name, checkin.whiskey.name
#     json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id
#   end
# end
