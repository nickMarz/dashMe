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

  def feed #experimental
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = Rails.application.config.twitter_key
      config.consumer_secret     = Rails.application.config.twitter_secret
      config.access_token        = oauth_token
      config.access_token_secret = oauth_secret
      end
    return @timeline = client.home_timeline()
  end
  
end
