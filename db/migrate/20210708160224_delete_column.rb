class DeleteColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category_id
  end
end
