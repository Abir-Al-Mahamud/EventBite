class SessionsController < ApplicationController
    
    def new 
        render :new #replace with JSON
    end

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user 
            login(@user)
            redirect_to users_url
        else
            flash[:errors] = ['Invalid username or password']
            render :new #replace with JSON
        end
    end

    def destroy 
        logout 
        redirect_to new_session_url 
    end

    private 

    def session_params 
        params.require(:user).permit(:email, :password)
    end
    
end