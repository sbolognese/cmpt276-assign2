class Student < ActiveRecord::Base
  validates :name, presence:true, length:{maximum:10}
  validates :weight,presence:true, numericality:{:greater_than=>0, :less_than_or_equal_to => 200}
  validates :height,presence:true, numericality:{:greater_than=>0, :less_than_or_equal_to => 200}
  validates :color,presence:true
  validates :fav,presence:true
  validates :gpa,presence:true, numericality:{:greater_than=>0, :less_than_or_equal_to => 4}
end
