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

require 'test_helper'

class CheckinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
