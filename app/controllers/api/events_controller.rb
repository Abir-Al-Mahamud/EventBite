class EventsController < ApplicationController


    def index 
        @events = Event.all 
    end

    def show 
        @event = Event.find(params[:id])
    end

    def create 
        @event = User.new(event_params)

        if @event.save 
            render :show 
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update 
        @event = Event.find_by(id: params[:id])
        if @event.update(event_params)
            render: show 
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
        params.require(:event).permit(:title, :description, :date)
    end
end