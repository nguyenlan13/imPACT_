class UsersController < ApplicationController

    before_action :require_auth, except: :create

    def create
        user = User.new(user_params)
        if user.save
            payload = {
                sub: user.id,
                iss: "imPact",
                iat: Time.current.to_i,
                exp: 5.days.from_now.to_i
              }
            token = JWT.encode(payload, ENV.fetch("JWT_SECRET"), 'HS256', {})
            render json: { message: "success!", token: token }
            # log_in(user)
            # cookies["logged_in"] = true
            # render json: user, except: [:password_digest]
        else
            render json: {errors: user.errors.full_messages}, status: 400
        end
    end

    def show
        user = User.find(params[:id])
        render json: user, status: 200
    end

    def dashboard
        user = current_user
        render json: user, status: 200
    end

    private
    
    def user_params
        params.require(:user).permit(:email, :name, :username, :password)
    end
end
