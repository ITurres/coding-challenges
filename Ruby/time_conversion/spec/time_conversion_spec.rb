require_relative "../time_conversion.rb"

describe "#time_conversion" do
  it "returns nil if the string doesn't match the pattern" do
    expect(time_conversion("as:d:AM2")).to eq(nil)
  end

  it "returns '00:40:22' for '12:40:22aM'" do
    expect(time_conversion("12:40:22aM")).to eq("00:40:22")
  end

  it "returns '00:05:39' for '00:05:39AM'" do
    expect(time_conversion("00:05:39AM")).to eq("00:05:39")
  end

  it "returns '12:45:54' for '12:45:54Pm'" do
    expect(time_conversion("12:45:54Pm")).to eq("12:45:54")
  end

  it "returns '00:00:00' for '12:00:00AM'" do
    expect(time_conversion("12:00:00AM")).to eq("00:00:00")
  end

  it "returns '19:05:45' for '07:05:45PM'" do
    expect(time_conversion("07:05:45PM")).to eq("19:05:45")
  end
end
