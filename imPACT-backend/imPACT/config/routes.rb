Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get "/auth" => 'sessions#auth'

    resources :users do
        resources :habits
    end













end
