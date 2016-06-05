class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :height
      t.string :weight
      t.string :color
      t.string :gpa
      t.string :fav

      t.timestamps null: false
    end
  end
end
