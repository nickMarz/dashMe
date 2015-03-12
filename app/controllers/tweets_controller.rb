class TweetsController < ApplicationController
  # def new
  # end

  def new
    
  end

  def create
    current_user.tweet(params[:message])
    redirect_to sessions_path, notice: "Tweet sent!"
  end

  def show  #experimental
    current_user.feed
    @user_timeline = current_user.feed
    
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end

end
