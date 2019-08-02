json.partial! 'api/users/user', user: @user, user_checkins: @user_checkins
json.user_checkin_ids @user_checkins.pluck(:id) if @user_checkins
