1. Q: What is a "side effect" in React? What are some examples?

A: a side effect in React is an effect creating problems on the component rendering lifecycle, that happens because we are interacting and requesting APIs outised of React world. In other words: it's any code that React is not in charge of handling. So any code that has an effect on an outside system.

An example: 
- a call to an external API
- interacting with the DOM API

2. Q: What is NOT a "side effect" in React? Examples?

A: A normal effect, NOT side effect in React is an effect that doesn't disrupt React correct working. So any code that React is in charge of. For example: 
- changing a state's string value
- updating the UI


3. Q: When does React run your useEffect function? When does it NOT run
   the effect function?
   
A: React runs useEffect after the component is rendered (first render) and after every single re-render of the same component. It does not run it when we pass an empty array as the second parameter of useEffect.


4. Q: How would you explain what the "dependecies array" is?

A: dependecies array is an array of values whose change is what useEffect looks up to understand if it should execute or not the callback function passed in as the first parameter. 
