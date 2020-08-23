class IdentitiesController < ApplicationController

    def index
        if params[:user_id]
            identities = User.find(params[:user_id]).identities
        else
            identities = Identity.all
        end
    end

    def create
        identities = Identity.new(identity_params)
        if identity.save
            render: identity
        end
    end

end
