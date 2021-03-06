class Api::EventsController < ApplicationController


    def index 
        if params.has_key?(:author_id)
            @events = current_user.events 
        else
            @events = Event.all 
        end
        render :index
    end

    def show 
        @user = User.find_by(id: params[:id])
        @event = Event.find_by(id: params[:id])

        render :show
    end

    def create 
        @user = User.find_by(id: params[:id])
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
        @events = Event.all

        render :index 
    end

    private 

    def event_params
        params.require(:event).permit(:title, :description, :date, :category, :author_id, :start_time, :end_time, :author_name, :pic_url)
    end
end