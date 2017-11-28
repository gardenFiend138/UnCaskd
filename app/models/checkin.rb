# == Schema Information
#
# Table name: checkins
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  rating     :float            not null
#  user_id    :integer          not null
#  whiskey_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checkin < ApplicationRecord
  validates :body, :rating, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :whiskey,
    primary_key: :id,
    foreign_key: :whiskey_id,
    class_name: 'Whisky'
end
