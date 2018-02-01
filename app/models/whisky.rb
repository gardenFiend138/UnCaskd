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
  validates :description, :style, :abv, :style, presence: true

  has_many :checkins,
    primary_key: :id,
    foreign_key: :whiskey_id,
    class_name: 'Checkin'

  def self.top_five_results(query_param)
    puts 'query param below'
puts query_param
    param = '%' + query_param.to_s.downcase + '%'
    Whisky.where('lower(name) LIKE ?', param).limit(5)
  end

  # has_many :users,
  #   through: :checkins,
  #   source: :user
end
