class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.string :genre, null: false 
      t.integer :user_id, null: false 
      t.timestamps
    end
  end
end
