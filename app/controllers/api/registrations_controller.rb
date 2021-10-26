class Api::RegistrationsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :create, :destroy]

    def index 
        # debugger
        @user = User.find_by(id: params[:user_id])
        @registrations = @user.registrations
        render :index
    end

    def create
        @event = Event.find_by(id: params[:event_id])
        if @event.attendees.include?(current_user)
            render "api/events/show", status: 422
        else
            @registration = Registration.create(buyer_id: current_user.id, event_id: @event.id)
            render "api/events/show"
        end  
    end 

    def destroy 
        @registration = current_user.registrations.find_by(id: params[:buyer_id])
        @event = Event.find_by(id: params[:event_id])
   
        if @registration && @registration.destroy 
            @registrations = current_user.registrations
            render "api/registrations/index"
        else
            render "api/events/show", status: 422
        end
    end
    
end