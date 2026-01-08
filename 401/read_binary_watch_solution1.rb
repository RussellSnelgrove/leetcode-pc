# @param {Integer} turned_on
# @return {String[]}
def read_binary_watch(turned_on)
     result = []
  
  # Iterate through hours (0-11)
  (0..11).each do |h|
    # Iterate through minutes (0-59)
    (0..59).each do |m|
      # Count set bits in hour and minute combined
      # h << 6 shifts hours to make room for 6 minutes bits
      if (h.to_s(2).count('1') + m.to_s(2).count('1')) == turned_on
        result << "#{h}:#{m < 10 ? '0' : ''}#{m}"
      end
    end
  end
  
  result
end