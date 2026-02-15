# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    carry = 0

    b.reverse!
    a.reverse!

    a_index = 0
    b_index = 0
    result = ''
    while a_index < a.length || b_index < b.length || carry > 0 
        value = a[a_index].to_i + b[b_index].to_i + carry
        carry = (value > 1) ? 1 : 0
        result += (value % 2).to_s

        a_index += 1
        b_index += 1
    end
    result.reverse!
end