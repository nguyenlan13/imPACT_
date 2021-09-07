class UserIdentitiesController < ApplicationController

    before_action :require_auth

    def create
        user_identity = UserIdentity.new(user: current_user, identity: Identity.find(params[:identity_id]))
        if user_identity.save
            render json: { message: "ok"}
        else
            render json: { message: "You've already joined this PACT.", errors: user_identity.errors.full_messages}, status: 400
        end
    end

    def destroy
        # user_identity = UserIdentity.find_by(user: params[:user_id], identity: params[:identity_id])
        # user_identity = UserIdentity.find_by!(user: current_user, identity: params[:identity_id])
        user_identity = current_user.user_identities.find_by(identity_id: params[:identity_id])
        # user_identity = current_user.user_identities.find(params[:id])
        if user_identity.destroy
            render json: { message: "ok"}
        else
            render json: { message: "Sorry, something went wrong", errors: user_identity.errors.full_messages}, status: 400
        end
    end
end
