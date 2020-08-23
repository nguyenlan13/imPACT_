class HabitsController < ApplicationController

    def index
        current_user
        if params[:user_id]
            habits = User.find(params[:user_id]).habits
        elsif params[:identity_id]
            habits = Identity.find(params[:identity_id]).habits
        else
            habits = Habit.all
        end
    end

    def create
        habit = Habit.new(habit_params)
        if habit.save
            render json: habit
        end
    end

    def show
        user = current_user
        habit = Habit.find(params[:id])
        step = habit.steps.build
        commentable = habit
    end

    def habit_params
        params.require(:habit).permit(:build, :title, :frequency_number, :frequency)
    end

end
