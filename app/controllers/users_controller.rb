class UsersController < ApplicationController
  before_action :authorize, except: [:new, :create]

  def new
      @user = User.new
  end

  def create 
    @user = User.new user_params
    if @user.save 
      redirect_to root_url, notice: "Signed up!"
    else
      flash[:error] = "Sign in failed."
       render "new"
    end
  end
  
  def edit
  end

  private

  def user_params
    params.require(:user).permit(:user_email, :password, :password_digest)
  end 


end
