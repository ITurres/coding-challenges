def left_most_node_sum(array, index = 0)
  return 0 if index > array.length || array[index] === nil

  current_number = array[index]
  left_most_node_index = 2 * index + 1

  return current_number + left_most_node_sum(array, left_most_node_index)
end
