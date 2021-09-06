class ApplicationController < ActionController::API
    # include ActionController::Cookies
    # include ActionController::RequestForgeryProtection
    
    # protect_from_forgery with: :exception
    # before_action :set_csrf_cookie


    # def log_in(user)
    #     session[:user_id] = user.id
    # end

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end
    class LoginFailure < StandardError
    end

    rescue_from LoginFailure, with: :handle_auth_failure

    def handle_auth_failure(exception)
        resp = {
          error: true,
          error_code: :unauthorized,
          # message: exception.message,
        }
      
        if exception.is_a?(JWT::DecodeError)
          resp[:message] = exception.message
          resp[:error_code] = :invalid_token
        elsif exception.is_a?(LoginFailure)
          resp[:message] = exception.message
          resp[:error_code] = :unauthorized
        else
          resp[:message] = exception.message
        end
      
        render json: resp, status: :unauthorized
    end

    def require_auth
        if current_user.nil?
          raise LoginFailure
        end
    end

    def parse_auth_token
        return nil if request.authorization.blank?
        type, token = request.authorization.split(" ", 2)
        return nil if token.nil? || type.upcase != "BEARER"
        token
      end

    def current_user
        return @current_user if defined?(@current_user)
        return nil if parse_auth_token.blank?
        result = JWT.decode(parse_auth_token, ENV.fetch("JWT_SECRET"), true).first
        @current_user = User.find(result["sub"])
    rescue => err 
        logger.warn { "Login failure: #{err.class.name}: #{err.message}"}
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end 
    
    def authenticate
        redirect_to login_path if !logged_in?
    end

    private


    # def set_csrf_cookie
    #     cookies["CSRF-TOKEN"] = form_authenticity_token
    # end

end
