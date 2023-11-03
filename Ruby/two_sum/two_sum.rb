# * O(n^2)
# * for every pass, it creates a new array with the (n) excluded from it by
# * slicing the original array taking O(n) + using --include?-- that also takes O(n)( in the worst case)
# * this O(n) * O(n) adds up to O(n^2).

# def two_sum(nums, target)
#   res = []

#   nums.map.with_index do |n, i|
#     nums_without_n = nums[0...i] + nums[(i + 1)..-1]
#     res << i if nums_without_n.include?(target - n)
#   end

#   res
# end

# * O(n)
# * iterates throught the array once while adding to the hash and checking for complements.
def two_sum(nums, target)
  num_to_index = {}

  nums.each_with_index do |n, i|
    complement = target - n

    if num_to_index.key?(complement)
      return [num_to_index[complement], i]
    end

    num_to_index[n] = i
  end
end

# p two_sum([2, 7, 11, 15], 9)
# p two_sum([3, 2, 3], 6)
# p two_sum([3, 2, 4], 6)
