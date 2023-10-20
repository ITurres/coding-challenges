require_relative "../grading_scores.rb"

describe "grading_scores" do
  it "should correctly adjust the grades [73, 67, 40, 33] based on the given [73, 67, 38, 33] array" do
    expect(grading_scores([73, 67, 38, 33])).to eq([75, 67, 40, 33])
  end

  grades = [22, 86, 30, 0, 16, 51, 53, 42, 48,
            22, 69, 12, 27, 34, 24, 95, 16,
            32, 22, 52, 56, 71, 95]

  expected = [22, 86, 30, 0, 16, 51, 55, 42, 50,
              22, 70, 12, 27, 34, 24, 95, 16,
              32, 22, 52, 56, 71, 95]

  it "should correctly adjust the grades based on the grading logic for the given 'grades' array" do
    expect(grading_scores(grades)).to eq(expected)
  end
end
