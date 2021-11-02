class Api::RegistrationsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :create, :destroy]

    def index 
        # debugger
        # @user = User.find_by(id: params[:buyer_id])
        @user = current_user
        @registrations = @user.registrations
        render :index
    end
 
    def create
        @user_id = current_user.id 
        @event_id = params[:event_id].to_i
        @registration = Registration.new({ buyer_id: @user_id, event_id: @event_id })

        if @registration.save
            render :show 
        else
            render json: @registration.errors.full_messages, status: 422
        end

        # @user = User.find_by(id: params[:id])
        # # @user = User.find_by(id: params[:user_id])
        # @event_id = params[:event_id]
        # @event = Event.find_by(id: params[:event_id])
        # if @event.attendees.include?(current_user)
        #     # render "api/events/show", status: 422
        #     render json: @event.errors.full_messages, status: 422
        # else
        #     @registration = Registration.create(buyer_id: current_user.id, event_id: @event.id)
        #     # render "api/events/show"
        #     render :show 
        # end  
    end 

    # def show 
    #     @user = User.find_by(id: params[:buyer_id])
    # end

    def destroy 
        # debugger
        @registration = current_user.registrations.find_by(id: params[:id])
        @registration.destroy

        @user_id = current_user.id 
        @event_id = params[:event_id].to_i

        render :show
        # @event = Event.find_by(id: params[:event_id])
   
        # if @registration && @registration.destroy 
        #     @registrations = current_user.registrations
        #     render "api/registrations/index"
        # else
        #     render "api/events/show", status: 422
        # end
    end
    
end