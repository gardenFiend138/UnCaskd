# == Schema Information
#
# Table name: whiskies
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  description   :text             not null
#  image_url     :string           not null
#  abv           :float            not null
#  style_id      :integer          not null
#  distillery_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Whisky < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, :abv, presence: true

  has_many :checkins,
    primary_key: :id,
    foreign_key: :whiskey_id,
    class_name: 'Checkin'
end
