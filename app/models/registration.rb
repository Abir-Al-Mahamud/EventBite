class Registration < ApplicationRecord

    validates :buyer_id, presence: true 
    validates :event_id, presence: true 
    validates :buyer_id, uniqueness: { scope: :event_id,
        message: "Already registered for this event"

    }

    belongs_to :user,
        foreign_key: :buyer_id,
        class_name: :User
        
    belongs_to :event

end
