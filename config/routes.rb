Rails.application.routes.draw do
  root :to => "users#new"
  # get 'home/show'
  # root 'users#index'
  # get 'users/index'
  get "logout" => "sessions#destroy", as: "logout"
  get "login" => "sessions#new", as: "login"
  get "signup" => "users#new", as: "signup"

  get '/auth/:provider/callback', to: 'sessions#create_identity', as: 'sign_in'
  get '/auth/failure', to: redirect('/')
  get 'stream' => "users#tweetStream"
  get 'signout', to: 'sessions#destroy_connect', as: 'signout'
  resources :tweets, only: [:new, :create]
  resources :sessions, only: [:create, :destroy, :create_identity, :destroy_connect]
  resource :home, only: [:show]
  resources :users

  
  

  # root to: 'home#show'

end
