Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get "/auth" => 'sessions#auth'
    post "/login" => 'sessions#create'
    post "/signup" => "users#create"
    get "/dashboard" => "users#dashboard", as: "dashboard"

    
    resources :users do
        resources :habits
    end

    











end
