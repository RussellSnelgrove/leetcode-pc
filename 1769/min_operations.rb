# @param {String} boxes
# @return {Integer[]}
def min_operations(boxes)
    n = boxes.length
    result = Array.new(n, 0)
    count = 0
    operations = 0

    # Left to right
    (0...n).each do |i|
        result[i] += operations
        count += boxes[i].to_i
        operations += count
    end
    # Right to left
    count = 0
    operations = 0
    (n - 1).downto(0) do |i|
        result[i] += operations
        count += boxes[i].to_i
        operations += count
    end
    result
end