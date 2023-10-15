const binarySearchTree = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('first_array_of_7_elements', function () {
    // Failure message: 
    // Method called: binary_search_tree([5, 3, 7, 1, 2, 6, 8])

    const arr = [5, 3, 7, 1, 2, 6, 8]
    assert(binarySearchTree(arr).replace(/^\s+|\s+$/g, '') === '5 3 1 2 7 6 8')
  })

  it('array_of_9_elements', function () {
    // Failure message: 
    // Method called: binary_search_tree([10, 12, 15, 7, 2, 23, 9, 14, 21])

    const arr = [10, 12, 15, 7, 2, 23, 9, 14, 21]
    assert(binarySearchTree(arr).replace(/^\s+|\s+$/g, '') === '10 7 2 9 12 15 14 23 21')
  })

  it('second_array_of_7_elements', function () {
    // Failure message: 
    // Method called: binary_search_tree([50, 25, 75, 15, 21, 62, 91])

    const arr = [50, 25, 75, 15, 21, 62, 91]
    assert(binarySearchTree(arr).replace(/^\s+|\s+$/g, '') === '50 25 15 21 75 62 91')
  }) 
})
