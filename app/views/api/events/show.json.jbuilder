json.partial! 'api/events/event', event: @event 
json.extract! @event, :id, :title, :description, :date, :author_name, :author_id, :start_time, :end_time, :category, :pic_url
json.attendees @event.attendees.pluck(:id)