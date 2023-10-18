require_relative "../min_max_sum.rb"

describe "#min_max_sum" do
  it "should return 10 14 as space separated integers in one line" do
    expect { min_max_sum([1, 2, 3, 4, 5]) }.to output("10 14").to_stdout
  end

  it "should return 2063136757 2744467344 as space separated integers in one line" do
    expect {
      min_max_sum([256741038, 623958417, 467905213, 714532089, 938071625]).to output("2063136757 2744467344").to_stdout
    }
  end

  it "should return 2093989309 2548418794 as space separated integers in one line" do
    expect {
      min_max_sum([396285104, 573261094, 759641832, 819230764, 364801279]).to output("2093989309 2548418794").to_stdout
    }
  end

  it "should return 0 0 as space separated integers in one line" do
    expect { min_max_sum([]) }.to output("0 0").to_stdout
  end
end
