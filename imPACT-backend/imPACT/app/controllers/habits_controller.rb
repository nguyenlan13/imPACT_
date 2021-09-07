class HabitsController < ApplicationController
    before_action :require_auth

    def index
        if params[:showall]
            @habits = Habit.all
        elsif params[:identity_id]
            @habits = Identity.find(params[:identity_id]).habits
        else
            @habits = current_user.habits
        end
    end

    def create
        habit = Habit.new(habit_params)
        if habit.save
            render json: habit
        end
    end

    def show
        current_user
        habit = Habit.find(params[:id])
        step = habit.steps.build
        commentable = habit
        render json: habit
    end

    def habit_params
        params.require(:habit).permit(:build, :title, :frequency_number, :frequency)
    end

end
