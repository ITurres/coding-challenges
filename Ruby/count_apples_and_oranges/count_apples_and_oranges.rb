def count_apples_and_oranges(s, t, a, b, apples, oranges)
  return if s.nil? || t.nil? || a.nil? || b.nil? || apples.nil? || oranges.nil?

  count_fallen_fruits = ->(tree_location, fruit) do
    fallen_fruits = 0
    fruit.each do |fruit_distance|
      sum = tree_location + fruit_distance
      fallen_fruits += 1 if sum >= s && sum <= t
    end
    fallen_fruits
  end

  p count_fallen_fruits.call(a, apples)
  p count_fallen_fruits.call(b, oranges)
end
