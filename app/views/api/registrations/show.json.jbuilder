json.buyer_id @user_id
json.event_id @event_id

#json.partial! 'registration', registration: @registration 
#json.extract! @registration, :id, :title, :description, :date, :author_name, :author_id, :start_time, :end_time, :category, :pic_url
#json.attendees @registration.attendees.pluck(:id)