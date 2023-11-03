require_relative '../two_sum'

describe '#two_sum' do
  it 'Should return [0, 1] by given nums = [2, 7, 11, 15] and target = 9' do
    expect(two_sum([2, 7, 11, 15], 9)).to eq([0, 1])
  end

  it 'Should return [1, 2] by given nums = [3, 2, 4] and target = 6' do
    expect(two_sum([3, 2, 4], 6)).to eq([1, 2])
  end

  it 'Should return [0, 1] by given nums = [3, 3] and target = 6' do
    expect(two_sum([3, 3], 6)).to eq([0, 1])
  end
end
