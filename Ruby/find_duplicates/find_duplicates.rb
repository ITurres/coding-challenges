# frozen_string_literal: true

# * N = arr1
# * M = arr2

# * solution CASE N == M (length)
# ! if M or N ends up being of potentially larger length then this algorithm will have a TC of O(N + M) linear-time.
def find_duplicates(arr1, arr2)
  res = [] # * Only dynamic auxiliary space used, so space-complexity = O(n) where n <= m.
  # * worst case, res would end up being as larger as the smallest input array.
  pointer1 = 0
  pointer2 = 0

  while pointer1 < arr1.length && pointer2 < arr2.length
    if arr1[pointer1] == arr2[pointer2]
      res.push(arr1[pointer1])
      pointer1 += 1
      pointer2 += 1
    elsif arr1[pointer1] < arr2[pointer2]
      pointer1 += 1
    else
      pointer2 += 1
    end
  end

  res
end

# * solution CASE M >> N (length)
# * if M ends up being of potentially larger length then this algorithm will have a TC of O(n log m).
def find_duplicates_binary(arr1, arr2)
  res = [] # * Only dynamic auxiliary space used, so space-complexity = O(n) where n <= m.
  # * worst case, res would end up being as larger as the smallest input array.

  arr1.each do |num|
    res.push(num) if binary_search(arr2, num) != -1
  end
end

def binary_search(arr, num)
  begin_loop = 0
  end_loop = arr.length - 1

  while begin_loop <= end_loop
    middle = (begin_loop + (end_loop - begin_loop) / 2).floor

    if arr[middle] == num
      return middle
    elsif arr[middle] < num
      begin_loop = middle + 1
    else
      end_loop = middle - 1
    end
  end
end

p find_duplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20])
p find_duplicates_binary([1, 2, 3, 5, 6, 7, 22, 26], [3, 6, 7, 8, 20, 21, 22, 23, 24, 25, 26])
