class CreateDistilleries < ActiveRecord::Migration[5.1]
  def change
    create_table :distilleries do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
