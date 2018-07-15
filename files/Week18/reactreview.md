# Distinguishing features of React:

- JSX
- Virtual DOM ()

# Zoom In:

- What makes a react application: ReactDOM.render(<App />, document.getElementbyID('root)) -- entry point
- <App /> = component
- React Component = Writes a function that returns JSX
- Must export and import components to each js file 
- Browserify / Webpack stops us from having script tags and compiles into one large file
- Create React App - installs Browserify and Webpack also
- React is purely a tool for front-end
- Constructor is where we add state: super, this.state
- Render is where we use JSX

# How to Start React

- Trying to figure out your structure
- Our components are making a tree structure:
- Start with App + 5 Components
- Outline your files + add imports, constructor info, class info, render info, and exports
- Trees are better when they are wide as opposed to deep
- Make sure to add .bind(this) to any function you write in your class