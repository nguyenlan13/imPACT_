class IdentityHabitsController < ApplicationController
    before_action :require_auth

    def create
        identity_habit = IdentityHabit.new(identity: Identity.find(params[:identity_habit][:identity_id]), habit: Habit.find(params[:habit_id]))
        if identity_habit.save
            render json: { message: "Linked!" }
        else
            render json: { message: "This habit is already linked to this identity." }
        end
    end

    def destroy
        identity_habit = IdentityHabit.find_by(habit: params[:habit_id], identity: params[:identity_id])
        if identity_habit.delete
            render json: { message: "Ok." }
        else
            render json: { message: "Sorry, could not unlink." }
        end
    end


end
