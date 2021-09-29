@events.each do |event|
    json.set! event.id do 
        json.partial! 'event', event: event 
        json.extract! event, :id, :title, :description, :date, :author_name, :author_id, :start_time, :end_time, :category, :pic_url
    end 
end