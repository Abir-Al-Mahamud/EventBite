class AddPicUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :pic_url, :string
  end
end
