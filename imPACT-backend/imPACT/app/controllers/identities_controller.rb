class IdentitiesController < ApplicationController
    before_action :require_auth

    def index
        if params[:showall]
            @identities = Identity.all
        else
            @identities = current_user.identities
        end
    end

    def create
        @identity = Identity.new(identity_params)
        if @identity.save
            render :show
        else
            render json: {errors: @identity.errors.full_messages}, status: 400
        end
    end

    def show
        @identity = Identity.find(params[:id])
    end

    private

    def identity_params
        params.require(:identity).permit(:pact_name, :description)
    end

end
