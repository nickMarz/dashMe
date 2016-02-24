class TweetsController < ApplicationController
  def new

  end

  def create
    current_user.tweet(params[:message])
    redirect_to root_path, notice: "Tweet sent!"
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end

  def show

    # Error checking
    if current_user === nil
      render :text => "Error!"
      return
    end

    current_user.feed
    @user_timeline = current_user.feed
    render :json => @user_timeline
  end

end