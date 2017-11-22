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

require 'test_helper'

class CheerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
