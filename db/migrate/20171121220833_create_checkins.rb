# DB level validations
class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.text :body
      t.float :rating, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :checkins, :user_id
  end
end
