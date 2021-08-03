class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false 
      t.text :description, null: false
      t.datetime :date, null: false 
      t.string :author_name, null: false 
      t.integer :author_id, null: false 
      t.datetime :start_time, null: false 
      t.datetime :end_time, null: false 
      t.integer :category_id, null: false 
      t.timestamps
    end
    
    add_index :events, :author_name 
    add_index :events, :author_id
    add_index :events, :category_id
  end
end
