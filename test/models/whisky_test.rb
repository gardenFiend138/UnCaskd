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

require 'test_helper'

class WhiskyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
