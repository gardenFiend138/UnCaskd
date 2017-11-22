# == Schema Information
#
# Table name: checkins
#
#  id         :integer          not null, primary key
#  body       :text
#  rating     :float            not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checkin < ApplicationRecord
end
