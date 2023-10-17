def simple_arr_sum(ar)
  # * This method calculates the sum of all elements in the 'ar' array using the addition operator (+).
  ar.reduce(:+)
end

# * The 'reduce' method in Ruby takes a block or a symbol as an argument.
# * - If a block is given, it accumulates values in the array by applying the block's operation.
# * - If a symbol is given (this case), it accumulates values in the array by using the symbol as a method for addition.
# * In both cases, 'reduce' returns the final value of the accumulator, which, in this case, is the sum of the array elements.
