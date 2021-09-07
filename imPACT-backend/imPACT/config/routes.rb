Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get "/whoami" => 'sessions#whoami'
    post "/login" => 'sessions#create'
    post "/signup" => "users#create"
    get "/dashboard" => "users#dashboard", as: "dashboard"

    post "/join" => "user_identities#create", as: "join"
    delete "/leave" => "user_identities#destroy", as: "leave"
    post "/link" => "identity_habits#create", as: "link"
    delete "/unlink" => "identity_habits#destroy", as: "unlink"

    resources :identities, only: [:index, :new, :create, :show]
    resources :habits
    resources :users, except: [:new]
    
    resources :identities do
      resources :habits
    end

    # resources :users do
    #     # resources :identities
    #     resources :habits
    # end

    











end
