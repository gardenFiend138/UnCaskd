@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
    json.set! :checkins do
      json.array! user.checkins do |checkin|
        json.set! :name, checkin.whiskey.name
        json.set! :cheers_ids, checkin.cheers.pluck(:id)
        # json.set! :image_url, checkin.whiskey.image_url
        json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers
      end

    end
  end
end


#
# @users.each do |user|
#   json.set! user.id do
#     json.set! :checkins do
#       json.array! user.checkins do |checkin|
#         # json.set! :image_url, checkin.whiskey.image_url
#         json.set! :name, checkin.whiskey.name
#         json.extract! checkin, :id, :updated_at, :rating, :body, :whiskey_id, :cheers_ids
#
#       end
#     end
#   end
# end
