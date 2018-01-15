json.extract! checkin,
              :id,
              :body,
              :rating,
              :user_id,
              :whiskey_id,
              :cheers

json.set! :username, checkin.user.username
json.set! :image_url, checkin.user.image_url
json.set! :whiskey, checkin.whiskey.name
json.set! :whiskey_image_url, checkin.whiskey.image_url
json.set! :time, checkin.updated_at
json.set! :cheers, checkin.cheers
