## Data Structures & Algorithms Part 1

# Intro
- Particular way of organizing data so it can be used efficiently
- Primitive Data Styles: Int, Char, Boolean, Float, Another Variable, Object - one single point of value
- Donald Knuth - Father of Computer Programming

# Big O Notation 
- Used to classify algorithms compared to their input size - always includes n
- How much data your function needs to go through

# Big O Notation Best - Worst
- O(1) - best, always does same computation
- O(log n) - functions that are able to eliminate half of the result set they dont need to go through, i.e searching for a number 1 - 100, as you get closer to the right number, your data set gets smaller
- O(n) - for every element, you have to do a for loop
- O(n log n) - for every element, you must do a for loop plus sub for-loop
- O(n^2)
- O(n^3)
- O(2^n) - worst

# Array
- Most basic data structure
- Collection of primitives
- Size matched to how many elements inside of it
- CON: Arrays cannot be changed once defined typically (O(n))
- PRO: Look up speed is very fast (constant -  O(1))

# Examples of Basic Data Structures
- Meant for tracking points on a graph and see if they are equal to each other

class point: 
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    def __eq__(self, b):
        return self.x == b.x && self.y == b.y

- Collecting just one data point for an account

class account: 
    def __init__(self, id):
        self.id = id
        self.account = db.get('select * from account where account.id = %s' % id)
    def __eq__(self, b):
        return self.id = b.id

# Linked List
- Collection of nodes (chain of elements that connect)
- Each node has a pointer to the next
- Easy to expand, insert, remove
- Takes O(n) time to get an element
- O(2n) size, but easy to add to (twice as big as how much data you want to put into it)
- Ideal for: modifying members of a list, add/insert/remove, iterating through a list in order, use multiple data types as elements
- Not ideal for: Randomly accessing members, uses more memory than arrays

- python example:

class Node():
    def __init__(self, data=None):
        self.data = data
        self.next = None
class linked_list():
    def __init__(self):
        self.head = None
        self.current = None
        self.tail = None
    def add_node(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
        else: 
            self.tail.next = node
            self.tail = node
if __name__ == "__main__":
    my_list = linked_list()
    my_list.add_node(Node('a'))
    my_list.add_node(Node('b'))
    my_list.add_node(Node(100))
    print(my_list.head.next.data)
    
# Linked List Variation
- doubly linked: pointer going forward and pointer going backwards (like movie frames)
- queue: only add nodes at the tail, and remove from the head (first in and first out, line at the grocery store - great for queueing messages to be processed)
- stack: only add and remove nodes from the tail (last in and first out, dishwasher - complete one from the top and putting away, only get to head once finish with tail)
- dequeue: generalization of stacks and queues (pronounced deck).

# Hash Table (sometimes called dictionaries)
- most commonly used data structures other than linked lists
- fancy arrays
- elements that can be processed in O(1) time
- size varies but typically O(2n) - twice as big as how much data you want to put into it
- requires a hash function and a unique key to identify elements
- probing (looking for another spot to input if a key is taken)
- once hash table becomes full, you hit a lot of hash collisions and must probe to fix 

# Hash Function
- hash(int(key)) % len(hash_table)
- easy to compute: should be easy to compute
- easy to uniformly distrubute hashes: don't want clustering
- less collisions: collisions occur when pairs of elements are mapped to the same has value 
- object is hashable if it has a hash value which never changes during its lifetime 

# Hash Collisions
- separate chaining (open hashing) 
- probing (closed hashing)
- growing the hash table

# Trees
- like linked lists
- node will have a pointer to a left and right node
- Root - first element in tree
- Parents - next node after root
- Child - next node after parent
- Siblings - same level node
- Branches - the pointers going left and right
- Leaves - last node on the tree
- Height - how many relations down

# Tree Uses
- Representing hierarchical data ( HTML DOM )
- Storing data in a way that makes it searchable ( see binary tree and tree traversal)
- Storing node relationships
- Used as a workflow for editing files (undo, redo)
- Routing algorithms
- Compression algorithms
- Text prediction
- Dictionaries

# Binary Tree
- most basic type of tree
- left and right nodes only
- depth first: start at the root and go down the tree until you find the leaf and going back up - pre-order, in-order (most popular - start on left side and work your way to the right side), post-order
- breadth first: exhaust every level of the tree before going down to the end
- balancing trees

# Red Black Tree
- one of the more popular ways of balancing a tree
- the rules of red / black trees:
- every node has a color either black or red
- root of tree is always black
- there are no two adjacent red nodes (a red node cannot have a red parent or red child)
- every path from root to a null node has the same number of black nodes

# Binary Heap Tree
- Defined as a binary tree with two additional rules:
- Nodes are filled from left to right if additional nodes remaining that don't complete levels
- parents are larger than all the numbers below it

# Graphs
- Similar to a tree, but no hierarchy
- abstract data type
- Nodes are called vertices and the links are called an edge
- The edges have a lot of information in them as well ( weight, value, cost )

# Graph Theory
- Social Media (Facebook)
- Linguistics (For computers to understand languages - machine learning or predictive text)
- Semantic Network + Syntax
- Chemistry + Biology (Molecules and Cells)
- Path Finding 
- Recommendation Engines

# Dijkstra's Algorithm
- Finding the shortest paths between nodes in a graph.
- Created in 1956, very popular for interviews
- Keeping tabs on the cost to get to each node in question and adding them as we go

# A* + Backtracking Algorithms
- Review for interviewing

# Facebook Graph
- _IS_FRIEND_OF
- LIKES
- SERVES
- LOCATED_IN

