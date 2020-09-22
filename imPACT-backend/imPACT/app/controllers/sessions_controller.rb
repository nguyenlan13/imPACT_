class SessionsController < ApplicationController

    def auth
        cookies["logged_in"] = logged_in?
        render json: {csrf_auth_token: form_authenticity_token}
    end

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            log_in(user)
            cookies["logged_in"] = logged_in?
            # render json: { user: user, message: "sucess!" }, status: 200
            render json: { message: "success!", user: user }
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end

    def destroy
        session.clear
        cookies["logged_in"] = logged_in?
        # session.delete(:user_id)
        render json: {message: "Logged Out", status: 200}
    end
    
end