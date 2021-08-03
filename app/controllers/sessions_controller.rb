# class SessionsController < ApplicationController

#     def create 
#         @user = User.find_by_credentials(params[:user][:email], [:user][:password])

#         if @user.nil?
#             render json: ['That is the wrong credentials'], status: 401
#         else
#             login!(@user)
#             render 'api/users/show'
#         end
#     end

#     def destroy 
#         @user = current_user
#         if @user 
#             logout! 
#             render json: { message: 'Logged out successfully'}
#         else
#             render json: ["Nobody signed in"], status: 404
#         end
#     end
# end