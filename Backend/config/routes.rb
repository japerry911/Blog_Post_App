Rails.application.routes.draw do
  resources :blogposts, only: [:index, :create, :destroy, :update]
end
