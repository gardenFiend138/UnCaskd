# DB level validations
class CreateWhiskies < ActiveRecord::Migration[5.1]
  def change
    create_table :whiskies do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :image_url
      t.float :abv, null: false
      t.string :style
      t.integer :style_id
      t.integer :distillery_id

      t.timestamps
    end

    add_index :whiskies, :style_id
    add_index :whiskies, :distillery_id
  end
end
