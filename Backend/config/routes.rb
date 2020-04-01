Rails.application.routes.draw do
  resources :blogposts, only: [:index]
end
