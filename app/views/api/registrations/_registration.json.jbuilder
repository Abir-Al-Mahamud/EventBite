@registrations.each do |reg|
    json.set! reg.id do 
        json.extract! reg, :id, :title, :description, :date, :category, :start_time, :end_time, :author_id, :author_name, :pic_url
    end
end