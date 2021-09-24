@registrations.each do |registration|
    json.set! registration.event_id do
        json.registration_id registration.id 
        json.buyer_id registration.buyer_id
        json.event_id registration.event_id
        
        json.extract! registration.event, :title, :description, :date, :author_name, :author_id, :start_time, :end_time, :category, :pic_url 
    end
end