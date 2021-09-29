@events.each do |event| 
    json.set! event.id do 
        json.extract! event, :id, :title, :description, :date, :category, :start_time, :end_time, :author_id, :author_name, :pic_url

    end
end 
