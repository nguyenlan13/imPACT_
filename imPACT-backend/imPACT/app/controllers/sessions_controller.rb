class SessionsController < ApplicationController
    before_action :require_auth, except: :create
    # def auth
        
    #     # cookies["logged_in"] = logged_in?
    #     # render json: {csrf_auth_token: form_authenticity_token}
    # end

    def whoami
        payload = {name: current_user.name, email: current_user.email, username: current_user.username}
        render json: payload
    end

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            payload = {
                sub: user.id,
                iss: "imPact",
                iat: Time.current.to_i,
                exp: 5.days.from_now.to_i
              }
            token = JWT.encode(payload, ENV.fetch("JWT_SECRET"), 'HS256', {})


            # log_in(user)
            # cookies["logged_in"] = logged_in?
            # render json: { user: user, message: "success!" }, status: 200
            render json: { message: "success!", token: token }
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end

    # def destroy
    #     session.clear
    #     cookies["logged_in"] = logged_in?
    #     # session.delete(:user_id)
    #     render json: {message: "Logged Out", status: 200}
    # end
    
end