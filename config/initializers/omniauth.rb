OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['twitter_key'], ENV['twitter_secret']
  # provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
   {
      :name => "google",
      :scope => "email, profile, plus.me, http://gdata.youtube.com",
      :prompt => "select_account",
      :image_aspect_ratio => "square",
      :image_size => 50
    }

end