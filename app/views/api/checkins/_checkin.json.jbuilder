json.extract! checkin,
              :id,
              :body,
              :rating,
              :user_id,
              :whiskey_id

json.set! :username, checkin.user.username
json.set! :whiskey, checkin.whiskey.name
json.set! :time, checkin.updated_at
