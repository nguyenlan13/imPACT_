class SessionsController < ApplicationController

    def auth
        cookies["logged_in"] = logged_in?
        render json: {csrf_auth_token: form_authenticity_token}
    end

    
end