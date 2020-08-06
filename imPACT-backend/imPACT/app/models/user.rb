class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { within: 8..21 }, on: :create
    has_secure_password



    has_many :user_identities, dependent: :destroy
    has_many :identities, through: :user_identities
    has_many :habits, through: :identities
    has_many :steps, dependent: :destroy
    has_many :streaks, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :reactions, dependent: :destroy

end
