class TweetsController < ApplicationController
  def new
  end

  def create
    current_user.tweet(twitter_params[:message])
    redirect_to root_url, notice: "Tweet sent!"
  end

  def show  #experimental
    current_user.feed
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end

end
