class User < ActiveRecord::Base
  has_many :identities, inverse_of: :user, dependent: :destroy 
  validates :user_email, uniqueness:true
  validates :user_email, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}
  validates :user_email, presence: true
  validates :password, presence: true
end