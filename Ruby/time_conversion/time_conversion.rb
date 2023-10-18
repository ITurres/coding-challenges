def time_conversion(s)
  return unless s =~ /^\d{2}:\d{2}:\d{2}(AM|PM)$/i

  time_splitted = s.split(":")
  hour = time_splitted[0].to_i
  minutes = time_splitted[1]
  seconds = time_splitted[2][0..1]
  timeFormat = time_splitted[2][2..4].upcase # * = AM || PM.

  if timeFormat == "AM" && hour == 12
    hour -= 12
  elsif timeFormat == "PM" && hour != 12
    hour += 12
  end

  # * .rjust will ensure that the 'hour' is always two digits by adding
  # * a 0 to the left if the string is less than 2 characters.
  [hour.to_s.rjust(2, "0"), minutes, seconds].join(":")
end
