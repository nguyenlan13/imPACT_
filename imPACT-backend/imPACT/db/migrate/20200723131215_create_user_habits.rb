class CreateUserHabits < ActiveRecord::Migration[6.0]
  def change
    create_table :user_habits do |t|

      t.timestamps
    end
  end
end
