class Registration < ApplicationRecord

    validates :buyer_id, presence: true 
    validates :event_id, presence: true 
    validates :buyer_id, uniqueness: { scope: :event_id,
        message: "Already registered for this event"

    }

    belongs_to :user
    belongs_to :event

end
