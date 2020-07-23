class CreateUserIdentities < ActiveRecord::Migration[6.0]
  def change
    create_table :user_identities do |t|

      t.timestamps
    end
  end
end
