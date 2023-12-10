require_relative '../quick_sort_partition'

RSpec.describe 'UnitTests' do
  it 'array_for_nine_positions' do
    # Failure message:
    # Method called: quick_sort_partition([2, 10, 3, 7, 9, 4, 6, 12, 8])

    arr = [2, 10, 3, 7, 9, 4, 6, 12, 8]
    expect(quick_sort_partition(arr)).to eq([2, 10, 3, 7, 9, 4, 6, 12, 8])
  end

  it 'array_of_twenty_positions' do
    # Failure message:
    # Method called: quick_sort_partition([45, 25, 46, 48, 28, 6, 13, 5, 36, 44, 7, 4, 11, 30, 24, 34, 15, 31, 38, 49])

    arr = [45, 25, 46, 48, 28, 6, 13, 5, 36, 44, 7, 4, 11, 30, 24, 34, 15, 31, 38, 49]
    expect(quick_sort_partition(arr)).to eq([25, 28, 6, 13, 5, 36, 44, 7, 4, 11, 30, 24, 34, 15, 31, 38, 45, 46, 48, 49])
  end
end
