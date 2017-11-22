# == Schema Information
#
# Table name: styles
#
#  id          :integer          not null, primary key
#  type        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Style < ApplicationRecord
end
