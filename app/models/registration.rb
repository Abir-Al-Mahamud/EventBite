class Registration < ApplicationRecord

    validates :buyer_id, presence: true 
    validates :event_id, presence: true 

    belongs_to :user,
        class_name: :User,
        foreign_key: :author_id
end
