def min_max_sum(arr)
  return print "0 0" if arr.empty?

  sum_of_all = arr.map { |exceptThisNum| arr.reduce(:+) - exceptThisNum }

  print "#{sum_of_all.min()} #{sum_of_all.max()}"
end
