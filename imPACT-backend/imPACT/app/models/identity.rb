class Identity < ApplicationRecord
    has_many :user_identities, dependent: :destroy
    has_many :users, through: :user_identities
    has_many :identity_habits, dependent: :destroy
    has_many :habits, through: :identity_habits
    has_many :comments, as: :commentable, dependent: :destroy

    validates :pact_name, uniqueness: true, presence: true
    validates :description, uniqueness: true, presence: true
end
