# json.partial! 'checkin', checkin: @checkin, checkins: @checkins

json.checkins do
  @checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'checkin', checkin: checkin
      # json.id checkin.id
      # json.body checkin.body
      # json.rating checkin.rating
      # json.user_id checkin.user_id
      # json.whiskey_id checkin.whiskey_id
      # json.cheers checkin.cheers
      # json.username checkin.user.username
      # json.image_url checkin.user.image_url
      # json.whiskey checkin.whiskey.name
      # json.whiskey_image_url checkin.whiskey.image_url
      # json.time checkin.updated_at
      # json.cheers checkin.cheers
      # json.cheered_users checkin.cheers.pluck(:user_id)
    end
  end

end
json.recentCheckins @recent_checkins.pluck(:id)
