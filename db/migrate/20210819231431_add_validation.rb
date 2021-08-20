class AddValidation < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :pic_url
    add_column :events, :pic_url, :string, null: false
  end
end
