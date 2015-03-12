class TweetsController < ApplicationController
  # def new
  # end

  def new
    
  end

  def create
    current_user.tweet(params[:message])
    redirect_to sessions_path, notice: "Tweet sent!"
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end

end
