Hokay. So you want to learn the command line. Great. This starts with much pain and suffering but ends in enlightenment padawan learner 禪.

First we need to understand some basics of Linux. When you start a terminal, you have created a *shell* that you can interact with. The shell has a set of environment variables that can be read at any time (this is very useful later) and even allows you to launch additional shells if you want to. Remember this, because it's important: each shell is completely isolated from any other shell. 

+ ------- + + ------- +
| shell 1 | | shell 2 |
+ ------- + + ------- +

Technically you could have shell 1 talk to shell 2, but we won't worry about that in this course; that's advanced linux stuff. Changes you make from a shell that affects persisted items will be reflected in all shells (like creating a file), but if you were to modify a memory parameter--like say an environment variable--those values are not reflected in all shells.

Now, let's look at some basic commands for navigating through a shell via the *prompt*. Note we are assuming the bash shell for all examples--more exotic shells are out of scope.

## Basic commands
- pwd   => Prints the current 'working directory.'
- ls    => Lists everything in the current directory.
- cd    => Changes the current directory
- mkdir => Makes a new directory here
- touch => Creates a new file here
- less  => Views a file with controls
- cat   => Dumps a file to stdout
- cp    => Copies a file or directory
- mv    => Move/rename a file or directory
- rm    => Removes a file or directory
- man   => RTFM. Pulls up the manual for commands.
- echo  => Repeats what you type to stdout
- wc    => Counts the number of words in a file

## CLI Shortcuts
- up-arrow  => Cycles through previous commands
- tab       => Autocomplete a command, directory, or name
- ctrl+a    => Move to the front of a command
- ctrl+e    => Move to the end of a command

Now for an exercise. We're going to create the following file structure:

<root>
  + digitalcrafts
    + projects
      + CLI101
        - hello.txt
    + mysite
      - index.html
    + files
      - file1.txt
      - file2.txt
      - file3.md
      - <your-name>.info
      - remove-me-1.txt
      - remove-me-2.txt

**Exercise 1.1**: Create the folder structure above using the terminal. Verify that it looks correct via your file explorer.

Great! But what good are files with no content? Next up let's see how the redirection works. All unix shells have two main streams that information flows from: standard out (stdout) and standard err (stderr). We see the results of standard out anytime we type a basic command like `ls` or `pwd`. We can harness the power of stdout by using a redirection operator, which is outlined below.

- >  => Direct standard out to the stream we designate & truncate
- >> => Direct standard out to the stream we designate & append

**Exercise 1.2**: Using the command line, place the words "hello world" into hello.txt. Next, place the string <html></html> into the index.html file. Next place three full sentences inside file1.txt, file2.txt, and file3.md. Finally, append another sentence to file2.txt without deleting it's current contents.

Next up let's talk about some more advanced mojo. Commands in linux flow from left to right and you can actually pass the output of one command as input to another using a special operator called a pipe.

- | => Pipes input from one command to the next

This is useful for chaining groups of commands together in order to acheive something useful. Below are some useful commands for passing information into from other commands:

## Advanced commands
- grep  => Finds stuff in files using regular expressions
- find  => Finds files and directories that match patterns
- xargs => Executes commands on lines from standard input

For example, let's say that from our root directory we wanted to find all files with an extension of txt. We can do this two ways:

1. find . -name *.txt
2. find . | grep .txt

The first way only works if you have a specific version of find installed on your machine, namely the GNU version. The second version works on any version of unix in the universe with basic find and grep commands installed. What if you only wanted to constrain your search to a specific directory?

**Exercise 1.3**: From inside the files directory, use a pipeline to display files with only your name in it. Next, use a pipeline to dump the contents of a file and search for a specific key word (you may look at the contents of the file first in case you don't remember something to look for).

Finally, let's look at how xargs works. This command runs another command on every line printed to standard out from another command. Take a look at this command:

find . | grep .txt | xargs cat

Let's dissect it one at a time. First, we're running a find command in the current directory. That will find everything in the current and subsequent directories. Next, we're piping that to a grep for ".txt" which tells us that we're narrowing our files list to just files containing ".txt" in the name. Finally, we're piping that list of files to the xargs command which will run cat on each file. In one sentence, we're dumping the contents of all text files to the terminal from the current directory!

**Exercise 1.4**: Use xargs to count the number of words in all text files in your project directory.

**Exercise 1.5**: Use xargs to remove all files with remove-me in their name. Shields up, red alert! Be very careful or you might blow everything away. Go iteratively, adding one command to the pipe at a time and add the xargs only when you're satisfied you have the correct target.