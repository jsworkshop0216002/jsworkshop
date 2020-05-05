class ChangeStartAtEndAtColumnType < ActiveRecord::Migration[6.0]
  def change
    change_column :products, :start_at, :datetime
    change_column :products, :end_at, :datetime
  end
end
