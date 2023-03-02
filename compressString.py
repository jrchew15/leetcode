class Solution:
    def compress(self, chars) -> int:
        # two pointers: write and read
        write = 0
        read = 0
        while read < len(chars):
            chars[write] = chars[read]
            count = 0
            while read < len(chars) and chars[read] == chars[write]:
                count += 1
                read += 1
            if count > 1:
                for digit in str(count):
                    write += 1
                    chars[write] = digit
            write += 1
        return write
