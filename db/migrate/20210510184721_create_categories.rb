class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title, null: false 
      t.text :description 
      t.timestamps
    end

    add_index :categories, :title
  end
end
