# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :checkins,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Checkin'

  has_many :whiskey,
    through: :checkins,
    source: :whiskey

  has_many :cheers,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Cheer'


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    # (user && user.is_password?(password)) ? user : nil
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def self.user_checkins(user_id)
    Checkin.where(user_id: user_id).order(updated_at: :desc)
  end

end
