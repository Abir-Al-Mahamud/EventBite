class Api::UsersController < ApplicationController

    # before_action :ensure_logged_in, only: [:index, :show]

    def create 
        @user = User.new(user_params)
        
        if @user.save 
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password)
    end

end