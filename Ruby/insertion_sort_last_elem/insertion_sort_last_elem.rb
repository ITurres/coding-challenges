def insertion_sort_last_elem(arr)
  unsorted_n = arr.last # ? = X.
  i = arr.size - 2 # ? the rightmost element before 'unsorted_n'.

  while i >= 0 && arr[i] > unsorted_n
    arr[i + 1] = arr[i] # ? Shift elements to the right until the right spot for 'unsorted_n' is found.
    puts arr.join(' ') # ! now it prints the arr after each shift.
    i -= 1
  end

  # ? i = -1, so by adding 1 to it, it becomes 0, position where 'unsorted_n' should be.
  arr[i + 1] = unsorted_n # ? place 'unsorted_n' in the correct spot.
  puts arr.join(' ') # * print the fully sorted arr.
end
