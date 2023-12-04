# frozen_string_literal: true

require './insertion_sort_last_elem'

# rubocop:disable Layout/LineLength
RSpec.describe 'UnitTests' do
  it 'array_of_five_positions' do
    # Failure message:
    # Method called: insertion_sort_last_elem([1, 4, 6, 9, 3])

    arr = [1, 4, 6, 9, 3]
    expect { insertion_sort_last_elem(arr) }.to output("1 4 6 9 9\n1 4 6 6 9\n1 4 4 6 9\n1 3 4 6 9\n").to_stdout
  end

  it 'array_of_fourteen_positions' do
    # Failure message:
    # Method called: insertion_sort_last_elem([1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23])

    arr = [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]
    expect do
      insertion_sort_last_elem(arr)
    end.to output("1 3 5 9 13 22 27 35 46 51 55 83 87 87\n1 3 5 9 13 22 27 35 46 51 55 83 83 87\n1 3 5 9 13 22 27 35 46 51 55 55 83 87\n1 3 5 9 13 22 27 35 46 51 51 55 83 87\n1 3 5 9 13 22 27 35 46 46 51 55 83 87\n1 3 5 9 13 22 27 35 35 46 51 55 83 87\n1 3 5 9 13 22 27 27 35 46 51 55 83 87\n1 3 5 9 13 22 23 27 35 46 51 55 83 87\n").to_stdout
  end

  it 'array_of_ten_positions' do
    # Failure message:
    # Method called: insertion_sort_last_elem([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])

    arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
    expect do
      insertion_sort_last_elem(arr)
    end.to output("2 3 4 5 6 7 8 9 10 10\n2 3 4 5 6 7 8 9 9 10\n2 3 4 5 6 7 8 8 9 10\n2 3 4 5 6 7 7 8 9 10\n2 3 4 5 6 6 7 8 9 10\n2 3 4 5 5 6 7 8 9 10\n2 3 4 4 5 6 7 8 9 10\n2 3 3 4 5 6 7 8 9 10\n2 2 3 4 5 6 7 8 9 10\n1 2 3 4 5 6 7 8 9 10\n").to_stdout
  end
end
# rubocop:enable Layout/LineLength
