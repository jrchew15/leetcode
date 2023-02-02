def length_of_last_word(s)
    i = s.length - 1
    while s[i] == ' '
        i-=1
    end
    s = s[0,i+1]
    (0..s.length).to_a.reverse_each do |x|
        if s[x] == ' '
            return s.length - x - 1
        end
    end
    return s.length
end
