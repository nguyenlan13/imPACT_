class CommentsController < ApplicationController

    def index
        current_user
        if params[:comment_id]
            comment = Comment.find(params[:comment_id]).comments
        elsif params[:habit_id]
            comment = Habit.find(params[:habit_id]).comments
        elsif params[:identity_id]
            comment = Identity.find(params[:identity_id]).comments
        elsif params[:streak_id]
            comment = Streak.find(params[:streak_id]).comments
        else
            comments = Comment.all
        end
            render json: comments
    end 
end
