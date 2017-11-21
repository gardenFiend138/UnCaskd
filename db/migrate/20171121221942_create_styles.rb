class CreateStyles < ActiveRecord::Migration[5.1]
  def change
    create_table :styles do |t|
      t.string :type, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
