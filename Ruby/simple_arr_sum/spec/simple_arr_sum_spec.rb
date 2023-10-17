require_relative "../simple_arr_sum.rb"

describe "#simple_arr_sum" do
  it "give [1, 2, 3, 4, 10, 11] func returns the sum of the array to eq 31" do
    expect(simple_arr_sum([1, 2, 3, 4, 10, 11])).to eq(31)
  end

  it "sum of [338, 65, 713, 595, 428, 610, 728, 573, 871, 868] to eq 5789" do
    expect(simple_arr_sum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868])).to eq(5789)
  end
end
