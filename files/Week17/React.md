

# React is not:
- Redux, JSX, Another version of Javascript, HTML, Webpack, Babel, React Native

# What is React?
- Allows you to render a whole page 
- jQuery = DOM manipulation > browser compatibinlity
- React = Next step up: Focus on what should the page look like - without thinking about all of the steps of updating the page // AKA - lets you describe what the DOM should look like

# Popular Spin-Offs of React
- Preact, Inferno, Hyperapp
- Stick with React

# Angular vs React
- Angular: Huge Framework, constraints on how you organize and archeitect your code. Easy to google fixes. But wants to take over page and application. Very contorlling. 
- React: Library, Tiny - only 2 functions. Can work within just a div.

# 2 Steps for React:
* Step 1
- Describe what the DOM should look like (AKA - Create description to DOM)
- Code > React.createElement(1, 2, 3)
- Describes what page should look like & creates Virtual DOM
- 1st argument > location on page
- 2nd argument > object where you outline properties or null > also called props
- 3rd argument > function or html information
* Better way to do with components: React.createElement(myFunction, argument to put in myFunction)

* Step 2
- Update the DOM to match the description (AKA - Render description to DOM)
- Code > ReactDOM.render()
- Renders Virtual DOM to a placeholder on the page

# Random React Notes:
- When Page loads in DOM > DOM Tree 
- Built-in DOM API = Vanilla JS
- Framework is very contstraining vs Library is more free flowing
- React is used in the frontend in the browser 99%, but can be used in the backend if they are trying to optomize their website (AKA Universal JS apps)
- Children can be text, another virtual DOM element, [] of those combined
- Viritual DOM - kind of like a template for your HTML (not document. elements) of what will show in your real DOM

# VS Code Tricks
- Open VS Code > Open code ./
- Open on Browser > Open index.HTML
- Select all of same variable > Command + D

# Terminal
- Getting rid of git: rm -rf .git
- Getting install serve to make local 3000 work: npm install -g serve
- to activate: serve ./ -p 3000

# Create a new repository on the command line
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin git@github.com:kaconant/bookstoreReact.git
- git push -u origin master

# Push an existing repository from the command line
- git remote add origin git@github.com:kaconant/bookstoreReact.git
- git push -u origin master

# Components
- Function that returns Virtual DOM elements
- Building blocks of react - helps you put into small, modular pieces
