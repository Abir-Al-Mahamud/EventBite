class Event < ApplicationRecord 
    validates :title, :description, :date 
end