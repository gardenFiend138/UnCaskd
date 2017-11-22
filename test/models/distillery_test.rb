# == Schema Information
#
# Table name: distilleries
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  location   :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class DistilleryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
