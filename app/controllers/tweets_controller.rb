class TweetsController < ApplicationController
  # def new
  # end

  def new
    
  end

  def create
    current_user.tweet(params[:message])
    redirect_to root_path, notice: "Tweet sent!"
  end

  def twitter_params
    params.require(:tweet).permit(:message)
  end
  
  def show  #experimental   
    current_user.feed #how do we get this to show up as JSON when the javascript is run!  
    @user_timeline = current_user.feed     #what we used to show it before
    render :json => @user_timeline
  end

end
