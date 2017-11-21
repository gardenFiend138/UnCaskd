class CreateCheers < ActiveRecord::Migration[5.1]
  def change
    create_table :cheers do |t|
      t.integer :checkin_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    
    add_index :cheers, :checkin_id
    add_index :cheers, :user_id
  end
end
