class SessionsController < ApplicationController
  before_action :authorize, except: [:new, :create_identity]
  
  def new
  end

  def create_identity
    user_identity = Identity.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user_identity.id
    redirect_to root_path
  end
 
  def destroy_connect
    session[:user_id] = nil
    binding.pry
    redirect_to root_path
  
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: "Logged in!"
    else
      flash.now.alert = "Email or password is invalid"
      render "new"
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end
  end
end
