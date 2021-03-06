Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :checkins, only: [:index]
    end

    resources :friends, only: [:index, :show, :create, :destroy]
    resources :distilleries, only: [:create, :new, :update]
    resources :whiskies, only: [:index, :create, :show, :update]
    resources :checkins
    resources :cheers, only: [:new, :create, :destroy, :index]
    resources :comments, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :whiskey_searches, only: [:index]
  end
end
