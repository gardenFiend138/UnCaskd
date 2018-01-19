@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
    json.set! :checkins do
      json.array! user.checkins do |checkin|
        json.set! :name, checkin.whiskey.name
        # json.set! :image_url, checkin.whiskey.image_url
        json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers
      end
    end
  end
end

# @users.each do |user|
#   json.set! user.id do
#     json.partial! 'user', user: user
#     json.set! :checkins do
#       json.array! user.checkins do |checkin|
#         json.set! :name, checkin.whiskey.name
#         json.set! :cheers_ids, checkin.cheers.each do |cheer|
#           json.extract! cheer.id
#         end
#         # json.set! :image_url, checkin.whiskey.image_url
#         json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id
#
#       end
#     end
#   end
# end
