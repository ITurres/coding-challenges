# Find The Duplicates

Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

## Example:

### input: 

```rb
arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
```

### output:

```rb
[3, 6, 7] # since only these three values are both in arr1 and arr2
```

#### Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer

function findDuplicates(arr1, arr2):
duplicates = []
i = 0
j = 0

while (i < arr1.length AND j < arr2.length):
if (arr1[i] == arr2[j]):
duplicates.push(arr1[i])
i = i + 1
j = j + 1
else if (arr1[i] < arr2[j]):
i = i + 1
else:
j = j + 1

return duplicates
Time Complexity: O(N+M) since in the worst case scenario we traverse both arrays once. Note that O(N+M) is a linear time complexity because the input size is O(N+M) as well.

Space Complexity: the variable duplicates is the only dynamic auxiliary space we’re using in the algorithm. In the worst case scenario, the size of duplicates is going to be as big as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.

Case 2 (M ≫ N)
When one array is substantially longer than the other, we should try to avoid traversing the longer one. Instead, we can traverse the shorter array and look up its values in the longer array by using the binary search algorithm. We explain why this approach is superior in this case to the previous one in the complexity analysis section.

Pseudocode:

function findDuplicates(arr1, arr2):
duplicates = []

    for number in arr1:
        if binarySearch(arr2, number) != -1:
            duplicates.push(number);

    return duplicates

function binarySearch(arr, num):
begin = 0
end = arr.length - 1

    while (begin <= end):
        mid = begin + floor((end-begin)/2)
        if arr[mid] < num:
            begin = mid + 1
        else if arr[mid] == num:
            return mid
        else:
            end = mid - 1

    return -1

Time Complexity: we running a binary search on arr2 N times. Hence the time complexity is O(N⋅log(M)). So why is this algorithm better than the previous one when M ≫ N? To demonstrate that let’s analyze the case that M = N^C, where C is a constant such that C 2. In this case, the time complexity of the second algorithm is: O(N⋅log(M)) = O(N⋅log(N^C)) = O(C⋅N⋅log(N)) = O(N⋅log(N)) And the time complexity of the first algorithm is: O(N + M) = O(N + N^C) = O(N^C) As we all know O(N^C) > O(N⋅log(N)).

Space Complexity: the variable duplicates is the only dynamic auxiliary space we’re using in the algorithm. In the worst case scenario, the size of duplicates is going to be as big as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.


OR YOU CAN SET THE ARRAY TO BE TRAVERSE TO ALWAYS BE THE SMALLEST ONE.