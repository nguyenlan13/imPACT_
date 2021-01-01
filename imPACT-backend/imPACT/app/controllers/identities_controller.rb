class IdentitiesController < ApplicationController

    def index
        if params[:user_id]
            identities = User.find(params[:user_id]).identities
            render json: identities
        else
            identities = Identity.all
            render json: identities
        end
    end

    def create
        identity = Identity.new(identity_params)
        if identity.save
            render json: identity
        end
    end

    def show
        user = current_user
        identity = Identity.find(params[:id])
        commentable = identity
        render json: identity
    end

    private

    def identity_params
        params.require(:identity).permit(:pact_name, :description)
    end

end
