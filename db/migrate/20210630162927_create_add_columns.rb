class CreateAddColumns < ActiveRecord::Migration[5.2]
  def change
    create_table :add_columns do |t|

      add_column :events, :category, :string, null: false  
      t.timestamps
    end
  end
end
