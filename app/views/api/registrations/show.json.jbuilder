json.buyer_id @user_id
json.event_id @event_id
#json.registration_id @registration_id




#json.event do 
#     event = Event.find(@registration.event_id)
#     json.set! event.id do
#         json.extract! event, :id, :title, :description, :date, :category, :start_time, :end_time, :author_id, :author_name, :pic_url
#         json.reg_id @registration.id
#         json.photoUrl url_for(event.photo) if event.photo.attached?
#     end
#end

#json.partial! 'registration', registration: @registration 
#json.extract! @registration, :id, :title, :description, :date, :author_name, :author_id, :start_time, :end_time, :category, :pic_url
#json.attendees @registration.attendees.pluck(:id)