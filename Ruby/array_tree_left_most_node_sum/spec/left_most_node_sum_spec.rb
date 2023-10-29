require_relative "../left_most_node_sum.rb"

describe "#left_most_node_sum" do
  it "Should return int -> 11 Based on array-tree [2, 7, 5, 2, 6, 0, 9]" do
    expect(left_most_node_sum([2, 7, 5, 2, 6, 0, 9])).to eq(11)
  end

  it "Should return int -> 15 Based on array-tree [1, 2, 3, 4, 5, 6, 7, 8, 9]" do
    expect(left_most_node_sum([1, 2, 3, 4, 5, 6, 7, 8, 9])).to eq(15)
  end

  it "Should return int -> 20 Based on array-tree [3, 9, 7, 2, 1, 5, 4, 6, 8]" do
    expect(left_most_node_sum([3, 9, 7, 2, 1, 5, 4, 6, 8])).to eq(20)
  end

  it "Should return int -> 20 Based on array-tree [10, 5, 15, 3, 7, 13, 18, 2, 4, 6, 8]" do
    expect(left_most_node_sum([10, 5, 15, 3, 7, 13, 18, 2, 4, 6, 8])).to eq(20)
  end
end
