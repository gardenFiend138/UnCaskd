Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :friends, only: [:index, :create, :destroy]
    end

    resources :distilleries do
      resources :whiskies, only: [:index, :create, :show, :update]
    end

    resources :checkins do
      resources :cheers, only: [:create, :destroy]
      resources :comments, only: [:create, :update, :destroy]
    end

    resource :session, only: [:create, :destroy, :show]
  end
end
