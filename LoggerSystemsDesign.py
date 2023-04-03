# You are tasked with implementing a Logger class. Once an instance of this class is created, other developers will call its methods to log when they begin and end a process

# Every call of the start and end methods will have two inputs: a unique identifier (string) and a timestamp (non-negative integer).





# Part 1:

# logger.start('a',1)
# logger.start('b',2)
# logger.start('c',4)
# logger.end('b',5)
# logger.start('d',6)
# logger.end('a',6)
# logger.start('e',7)
# logger.end('d',8)
# logger.end('c',8)
# logger.end('e',10)

# Given the above calls to an instance of your class, we expect the following to be printed to the console.
# 'b: 2 -> 5'
# 'a: 1 -> 6'
# 'd: 6 -> 8'
# 'c: 4 -> 8'
# 'e: 7 -> 10'



# Part 2:
# We now want the logger to print processes in the order that they started.
# Thus we would instead expect the following:
# 'a: 1 -> 6'
# 'b: 2 -> 5'
# 'c: 4 -> 8'
# 'd: 6 -> 8'
# 'e: 7 -> 10'


class Logger:
  def __init__():
    pass

  def start(id, time):
    pass

  def end(id, time):
    pass


logger = Logger();

logger.start('a',1)
logger.start('b',2)
logger.start('c',4)
logger.end('b',5)
logger.start('d',6)
logger.end('a',6)
logger.start('e',7)
logger.end('d',8)
logger.end('c',8)
logger.end('e',10)
