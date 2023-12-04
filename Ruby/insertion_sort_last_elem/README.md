# Insertion Sort 1 - last element

## Challenge description

Goal: Before sorting entire lists, sort one element in a list.

Given a sorted list of numbers with an unsorted number 'X' in the right-most spot, can you write some simple code to insert 'X' into the list so it remains sorted?

Print the list every time a value is shifted, until the list is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

_How to Solve:_ You can copy the right-most value ('X') to a variable, and consider its cell “empty”. Since this leaves an extra cell empty on the right, you can shift every number over until 'X' can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace a value with 'X'.

### Output Format

On each line, output the entire array every time an item is shifted in it. This will include duplicate values.

#### Example

```rb
insertion_sort_last_elem([1, 3, 2])
# => 1 3 3
#    1 2 3
```

---
