def grading_scores(grades)
  grades.map { |grade|
    if grade >= 38 && (5 - (grade % 5)) % 5 < 3
      (grade / 5.0).ceil * 5
    else
      grade
    end
  }
end
