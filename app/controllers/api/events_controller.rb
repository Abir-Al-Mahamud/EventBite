class Api::EventsController < ApplicationController


    def index 
        # debugger
        @events = Event.all 
    end

    def show 
        @event = Event.find(params[:id])
    end

    def create 
        # debugger
        @event = Event.new(event_params)
        @event.author_id = current_user.id 
        @event.author_name = current_user.first_name 
        if @event.save 
            render :show 
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update 
        @event = Event.find_by(id: params[:id])
        if @event.update(event_params)
            render :show 
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy 

        render :index 
    end

    private 

    def event_params
        params.require(:event).permit(:title, :description, :date, :category, :author_id, :start_time, :end_time, :author_name, :pic_url)
    end
end