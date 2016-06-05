json.array!(@students) do |student|
  json.extract! student, :id, :name, :height, :weight, :color, :gpa, :fav
  json.url student_url(student, format: :json)
end
