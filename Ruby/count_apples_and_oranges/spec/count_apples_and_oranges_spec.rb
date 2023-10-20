require_relative "../count_apples_and_oranges.rb"

describe "Count Apples and Oranges" do
  it "returns nil if any of the arguments is nil" do
    result = count_apples_and_oranges(nil, nil, nil, nil, nil, nil)

    expect(result).to eq(nil)
  end

  it "counts 1 - 1 fallen apples and oranges from 7, 11, 5, 15, [-2, 2, 1], [5, -6]" do
    result = count_apples_and_oranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

    expect(result).to eq(1) # * for first line of output: 1.
    expect(result).to eq(1) # * for second line of output: 1.
  end

  it "counts 0 - 0 fallen apples and oranges 2, 3, 1, 5, [-2], [-1]" do
    result = count_apples_and_oranges(2, 3, 1, 5, [-2], [-1])

    expect(result).to eq(0) # * for first line of output: 0.
    expect(result).to eq(0) # * for second line of output: 0.
  end
end
