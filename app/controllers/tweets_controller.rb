class TweetsController < ApplicationController
  def new
  end

  def create
    current_user_identity.tweet(twitter_params[:message])
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end

end
