Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get "/", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/mycities", to: "cities#mycities"
  get "/landmark/sortby", to: "landmarks#sortby"
  get "/cities/:id/funlandmarks", to: "cities#funlandmarks"

  
  resources :landmarks
  resources :cities, only: [:index, :create]
  
end
