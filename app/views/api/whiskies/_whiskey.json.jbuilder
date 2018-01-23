# json.partial! 'whiskey', whiskey: @whiskey#, whiskies: @whiskies

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
# json.set! :total_checkins, whiskey.checkins

json.set! :checkins do
  json.array! whiskey.checkins do |checkin|
    json.set! :username, checkin.user.username
    json.set! :image_url, checkin.user.image_url
    json.set! :user_id, checkin.user.id
    # json.set! :image_url, checkin.whiskey.image_url
    json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers
    json.cheered_users checkin.cheers.pluck(:user_id)
  end
end

# json.users do
#   @users.each do |user|
#     json.set! user.id do
#       json.extract! user, :username, :image_url
#     end
#   end
# end
