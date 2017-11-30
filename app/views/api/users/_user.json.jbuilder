json.extract! user, :id, :username, :image_url

json.set! :checkins, user.checkins
