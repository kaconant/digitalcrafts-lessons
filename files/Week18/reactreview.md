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