class Node
  attr_reader :value
  attr_accessor :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

class Traversal
  def in_order(node)
    return "" if node.nil?

    "#{in_order(node.left)}#{node.value} #{in_order(node.right)}"
  end

  def pre_order(node)
    return "" if node.nil?

    "#{node.value} #{pre_order(node.left)}#{pre_order(node.right)}"
  end

  def post_order(node)
    return "" if node.nil?

    "#{post_order(node.left)}#{post_order(node.right)}#{node.value} "
  end
end

def array_to_tree(array, index = 0)
  return nil if index >= array.length || array[index] == 0

  node = Node.new(array[index])
  node.left = array_to_tree(array, 2 * index + 1)
  node.right = array_to_tree(array, 2 * index + 2)

  node
end
