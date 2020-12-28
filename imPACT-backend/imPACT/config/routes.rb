Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get "/auth" => 'sessions#auth'
    post "/login" => 'sessions#create'
    post "/signup" => "users#create"
    get "/dashboard" => "users#dashboard", as: "dashboard"

    post "/join" => "user_identities#create", as: "join"
    delete "/leave" => "user_identities#destroy", as: "leave_pact"
    post "/link" => "identity_habits#create", as: "link"
    delete "/unlink" => "identity_habits#destroy", as: "unlink"

    resources :identities, only: [:index, :new, :create]
    resources :habits
    resources :users, except: [:new]
    

    resources :users do
        resources :identities
        resources :habits
    end

    











end
