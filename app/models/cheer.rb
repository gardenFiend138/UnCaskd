# == Schema Information
#
# Table name: cheers
#
#  id         :integer          not null, primary key
#  checkin_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cheer < ApplicationRecord
  belongs_to :checkin,
    primary_key: :id,
    foreign_key: :checkin_id,
    class_name: 'Checkin'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

end
