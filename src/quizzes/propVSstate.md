1. How would you describe the concept of "state"?
State is a plain JS object representing the state of an application at some point in time



2. When would you want to use props instead of state?
I would use props when I want to set a compoent's options, so when I want to configure it on creation time.
Props are like parameter you pass to a function -> in React you pass data to the component to configure it so that the component will use it to determine what will print to the screen



3. When would you want to use state instead of props?
State is when like you declare new variables inside a function -> In React you need state when you want a component to do the following:
- to maintain and remember some values from within the component
- to update some props' current value due to user interaction with the interface 



4. What does "immutable" mean? Are props immutable? Is state immutable?
Immutable means it cannot be changed.
Props are immutable
State is mutable