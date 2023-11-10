# frozen_string_literal: true

require_relative '../find_duplicates'

describe '#find_duplicates - while-loop' do
  it 'returns the correct result for the given input' do
    expect(find_duplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20])).to eq([3, 6, 7])
  end
end

describe '#find_duplicates - binary-search' do
  it 'returns the correct result for the given input' do
    expect(find_duplicates_binary([1, 2, 3, 5, 6, 7, 22, 26],
                                  [3, 6, 7, 8, 20, 21, 22, 23, 24, 25, 26])).to eq([1, 2, 3, 5, 6, 7, 22, 26])
  end
end
