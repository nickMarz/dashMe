class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    binding.pry
    redirect_to root_url, notice: "Signed in!"
  end

  def signout
    session[:user_id] = nil
    redirect_to root_url, notice: "Signed out!"
  end

end
