def counting_sort_2(arr)
  counting_array = [0] * (arr.max() + 1)
  arr.map { |n| counting_array[n] += 1 }

  # * sorted
  counting_array.each_with_index.map { |n, i| [i] * n }.flatten
end
