@whiskies.each do |whiskey|
  json.set! whiskey.id do
    json.partial! 'whiskey', whiskey: whiskey

    json.set! :checkins do
      json.array! whiskey.checkins do |checkin|
        json.set! :username, checkin.user.username
        json.set! :image_url, checkin.user.image_url
        json.set! :user_id, checkin.user.id

        json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers
        json.cheered_users checkin.cheers.pluck(:user_id)
      end
    end
  end
end

json.newest_whiskies @newest_whiskies.pluck(:id)

# json.set! :checkins do
#   json.array! whiskey.checkins do |checkin|
#     json.set! :username, checkin.user.username
#     json.set! :image_url, checkin.user.image_url
#     json.set! :user_id, checkin.user.id
#     # json.set! :image_url, checkin.whiskey.image_url
#     json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers
#   end
# end
