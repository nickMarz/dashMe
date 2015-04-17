class User < ActiveRecord::Base
  # def self.from_omniauth(auth)
  #   where(provider: auth.provider, uid: auth.uid).first || create_from_omniauth(auth)
  # end
  def self.from_omniauth(auth)
   where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_secret = auth.credentials.secret
      user.save!
    end
  end

  def self.create_from_omniauth (auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["nickname"] ? auth["info"]["nickname"] : auth["info"]["name"]
    end
  end

  def tweet(tweet)
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["twitter_key"]
      config.consumer_secret     = ENV["twitter_secret"]
      config.access_token        = oauth_token
      config.access_token_secret = oauth_secret
      end
    client.update(tweet)
  end

  # def feed #experimental
  #   client = Twitter::REST::Client.new do |config|
  #     config.consumer_key        = ENV["twitter_key"]
  #     config.consumer_secret     = ENV["twitter_secret"]
  #     config.access_token        = oauth_token
  #     config.access_token_secret = oauth_secret
  #     end
  #   return @timeline = client.home_timeline()
  # end

  # require 'flickr_fu'
  #   class FlickrController < ActionController::Base
  #     def create
  #       flickr = Flickr.new('flickr.yml')
  #       redirect_to flickr.auth.url(:write)
  #     end
  #     def flickr_callback
  #       flickr = Flickr.new('flickr.yml')
  #       flickr.auth.frob = params[:frob]
  #       current_user.update_attribute :flickr_token, flickr.auth.token.token
  #     end
  #     def something_else_with_flickr
  #       flickr = Flickr.new(YAML.load_file('flickr.yml').merge(:token => current_user.flickr_token))
  #       # now you have full access on the user's data :)
  #     end
  #   end
  # http://www.rubydoc.info/gems/flickr_fu/#Example_flickr_yml
end
