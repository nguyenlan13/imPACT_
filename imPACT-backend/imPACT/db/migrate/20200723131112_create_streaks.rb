class CreateStreaks < ActiveRecord::Migration[6.0]
    def change
        create_table :streaks do |t|
            t.integer :habit_id
            t.integer :user_id
            t.integer :current_streak
            t.integer :longest_streak
            t.datetime :longest_streak_end_date
            t.timestamps
        end
    end
end
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          