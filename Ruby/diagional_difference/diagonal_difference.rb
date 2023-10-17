def diagonal_difference(arr)
  if arr.empty?
    return
  end

  matrix_size = arr.length()
  left_to_right = 0
  right_to_left = 0

  arr.map do |inner_arr|
    left_to_right += inner_arr[0 - matrix_size]
    right_to_left += inner_arr[matrix_size - 1]
    matrix_size -= 1
  end

  (left_to_right - right_to_left).abs # * handle negatives by returning absolute value of the number.
end
