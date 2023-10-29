require_relative "../tree_traversal.rb"

describe Traversal do
  before(:each) do
    @tree = array_to_tree([10, 1, 2, 3, 4, 5, 6])
    @traversal = Traversal.new
  end

  it "Should return '3 1 4 10 5 2 6 ' for in_order traversal" do
    expect(@traversal.in_order(@tree)).to eq("3 1 4 10 5 2 6 ")
  end

  it "Should return '10 1 3 4 2 5 6 ' for in_order traversal" do
    expect(@traversal.pre_order(@tree)).to eq("10 1 3 4 2 5 6 ")
  end

  it "Should return '3 4 1 5 6 2 10 ' for in_order traversal" do
    expect(@traversal.post_order(@tree)).to eq("3 4 1 5 6 2 10 ")
  end
end

# * Finished in 0.00419 seconds (files took 0.14355 seconds to load)
# * 3 examples, 0 failures
