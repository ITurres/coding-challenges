# frozen_string_literal: true

# rubocop:disable Metrics/MethodLength
def insertion_sort_all(arr)
  # rubocop:disable Style/For
  for i in 1..arr.size - 1
    current_element = arr[i]
    empty_position = i

    # ? considering second iteration since the first one is skipped due to failing second condition.
    # * ------- i = 2 ------------------- 3 -------------- > ---- 2 ------
    while empty_position.positive? && arr[empty_position - 1] > current_element
      # ? second iteration: arr[empty_position] is not longer 2 but 3.
      # ? so the arr is [1, 3, 3] and [1, 2, 3] in the second iteration.
      arr[empty_position] = arr[empty_position - 1]
      empty_position -= 1
    end

    # ? --empty_position is now 0--
    arr[empty_position] = current_element
    # ? so arr[empty_position] is not longer 3 but 2.
    # ? so the arr is [1, 2, 3] at the end of second iteration.

    puts arr.join(' ')
  end
  # rubocop:enable Style/For
  arr
end
# rubocop:enable Metrics/MethodLength

p insertion_sort_all([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 2 3 4 6 9
