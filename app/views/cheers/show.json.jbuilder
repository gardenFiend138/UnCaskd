json.partial! 'cheers', cheer: @cheer

# if @cheer.checkin
#   json.checkin_id @cheer.checkin.id
#   json.checkin_likes @cheer.checkin.cheers.count
# else
#   json.checkin_id @cheer.checkin.id
#   json.checkin_cheers @cheer.checkin.cheers.count
# end
