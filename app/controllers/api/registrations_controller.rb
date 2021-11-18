class Api::RegistrationsController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :create, :destroy]

    def index 
        
        @user = current_user
        @registrations = @user.registrations
        render :index
    end
 
    def create
        @user_id = current_user.id 
        @event_id = params[:event_id].to_i
        @registration = Registration.new({ buyer_id: @user_id, event_id: @event_id })
        @user = User.find_by(id: params[:id])
        @event_id = params[:event_id]
        
        

        if @registration.save
            
            render :show 
        else
            render json: @registration.errors.full_messages, status: 422
        end


    end 

    def destroy 
        
        
        @user_id = current_user.id 
        @event_id = params[:event_id].to_i
        
        @registration = current_user.registrations.find_by(id: params[:id])
        # @registration_id = @registration.id
        @registration.destroy
        render :show


    end
    
end