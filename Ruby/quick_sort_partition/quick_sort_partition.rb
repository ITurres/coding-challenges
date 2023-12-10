def quick_sort_partition(array)
  pivot = array[0]
  left = []
  right = []

  array.each do |n|
    if n < pivot
      left << n
    else
      right << n
    end
  end

  # for i in 1..array.size - 1
  #   n = array[i]
  #   if n < pivot
  #     left << n
  #   else
  #     right << n
  #   end
  # end

  # [*left, pivot, *right]

  [*left, *right]
end

p quick_sort_partition([4, 5, 3, 9, 1])
# ? => [3, 1, 4, 5, 9]
