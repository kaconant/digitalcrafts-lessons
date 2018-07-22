# Refresher Notes for Redux
- State(or Store) -> subscribe() to update views
- Views -> dispatch() to update reducer
- Reducer -> will update the store

# Basic Functions
- dispatch( { type: "Increment" })
- createStore(myReducer)
- subscribe( () => {} )
- getState()

# ex:
let myReducer = (state, action) {
    if(action.type = "increment") {
        return state + 1
    }

# changes to React
- instead of subscribe(() => {}), we do connect()
- instead of getState(), we do: mapStateToProps

# Redux logic
- rootReducer wraps the store (actions have the logic)