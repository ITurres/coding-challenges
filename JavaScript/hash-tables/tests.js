const hashTable = require('./challenge')
const assert = require('assert')

describe('Tests', function () { 
  it('array_of_eleven_positions', function () {
    // Failure message: 
    // Method called: hashTable([2367, -65325, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3])
    const arr = [2367, -65325, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3]
    assert(JSON.stringify(hashTable(arr)) === JSON.stringify([7832, -3289, 980, 2367, 134, 3291, 3, -65325, -65326, 789, -185007]))
  })
  
  it('array_of_fifteen_positions', function () {
    // Failure message: 
    // Method called: hashTable([4376, -345, -342, 4376, -345, 84945, 4376, -347, -26509, 4376, 84945, 84944, -26509, 896341, 4376])
    const arr = [4376, -345, -342, 4376, -345, 84945, 4376, -347, -26509, 4376, 84945, 84944, -26509, 896341, 4376]
    assert(JSON.stringify(hashTable(arr)) === JSON.stringify([-342, 84944, 84945, 84945, -345, -345, -347, 896341, 4376, 4376, 4376, 4376, 4376, -26509, -26509]))
  })
  
  it('array_of_twenty_positions', function () {
    // Failure message: 
    // Method called: hashTable([10935, 12732, -3058, 1673, 14971, 5701, 18342, 4590, -10248, -11243, -5848, 14836, 7648, -3772, -8700, 19165, -16397, -13192, -18946, 14203])
    const arr = [10935, 12732, -3058, 1673, 14971, 5701, 18342, 4590, -10248, -11243, -5848, 14836, 7648, -3772, -8700, 19165, -16397, -13192, -18946, 14203]
    assert(JSON.stringify(hashTable(arr)) === JSON.stringify([-3058, 14971, 10935, 1673, -11243, 14203, 5701, 4590, 7648, 19165, -13192, -18946, 12732, 18342, -10248, -5848, -16397, 14836, -3772, -8700]))
  })
})
