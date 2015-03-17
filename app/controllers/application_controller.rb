class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
    helper_method :current_user_identity  
  # def current_user
  #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end


  protected
  def current_user_identity
    @current_user_identity ||= Identity.find session[:user_id] if session[:user_id]
  end
  
  def authorize
    unless User.find_by(id: session[:user_id])
      redirect_to root_path, notice: "You have not logged in."
    end
  end

  def current_user
    @user = User.find_by_id session[:user_id]
    
  end

  helper_method :current_user
end
