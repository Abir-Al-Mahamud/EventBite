class Event < ApplicationRecord 
    validates :title, presence: true
    validates :description, presence: true 
    validates :date, presence: true 
    validates :category, presence: true 
    validates :pic_url, presence: true

    # after_initialize :ensure_session_token

    belongs_to :user,
        class_name: :User,
        foreign_key: :event_id 

    has_many :registrations,
        class_name: :Registration,
        foreign_key: :event_id 

    
end