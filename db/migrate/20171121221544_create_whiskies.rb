# DB level validations
class CreateWhiskies < ActiveRecord::Migration[5.1]
  def change
    create_table :whiskies do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.float :abv, null: false
      t.integer :style_id, null: false
      t.integer :distillery_id, null: false

      t.timestamps
    end
    
    add_index :whiskies, :style_id
    add_index :whiskies, :distillery_id
  end
end
