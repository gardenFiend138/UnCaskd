json.extract! whiskey,
              :id,
              :name,
              :description,
              :image_url,
              :abv,
              :style,
              :style_id,
              :distillery_id

# get all of the checkins associated with a whiskey
json.set! :total_checkins, whiskey.checkins

# json.users do
#   @users.each do |user|
#     json.set! user.id do
#       json.extract! user, :username, :image_url
#     end
#   end
# end
