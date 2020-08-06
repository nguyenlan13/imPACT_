class Streak < ApplicationRecord
    belongs_to :habit
    belongs_to :user
  
    has_many :comments, as: :commentable, dependent: :destroy
    has_many :reactions, as: :reactable, dependent: :destroy

end
