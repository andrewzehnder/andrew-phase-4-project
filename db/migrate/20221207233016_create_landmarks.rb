class CreateLandmarks < ActiveRecord::Migration[6.1]
  def change
    create_table :landmarks do |t|
      t.integer :user_id
      t.integer :city_id
      t.string :name
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
