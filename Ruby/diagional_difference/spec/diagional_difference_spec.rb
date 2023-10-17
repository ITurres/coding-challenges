require_relative "../diagonal_difference.rb"

describe "diagonal_difference" do
  matrix_of_3 = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

  matrix_of_4 = [[-1, 1, -7, -8],
                 [-10, -8, -5, -2],
                 [0, 9, 7, -1],
                 [4, 4, -2, 1]]

  matrix_of_9 = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0],
  ]

  it "calculates the diagonal difference for a 3x3 matrix: should returns 2" do
    expect(diagonal_difference(matrix_of_3)).to eq(2)
  end

  it "calculates the diagonal difference for a 4x4 matrix: should returns 1" do
    expect(diagonal_difference(matrix_of_4)).to eq(1)
  end

  it "calculates the diagonal difference for a 9x9 matrix: should returns 52" do
    expect(diagonal_difference(matrix_of_9)).to eq(52)
  end
end
