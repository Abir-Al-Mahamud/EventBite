class UsersController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :show]

    def new 
        @user = User.new

    end

    def index 
        @user = User.all 

    end

    def show 
        @user= User.find(params[:id])

    end

    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            redirect_to users_url
        else
            flash[:errors] = ["Password is too short(minimum is 6 characters"]
            #render :new 
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end