# cosmic
Cosmic: A class management application. Focuses on UI design.

## Local Storage
If you need to save and access data across the application, use local storage!

_How to add data:_
`window.localStorage.setItem("itemName", stringRepresentationOfData);`

_How to retrieve data:_
`window.localStorage.getItem("itemName");`

Use `JSON.parse()` and `JSON.stringify()` to go between the two data types.

You can access the events data with `window.localStorage.getItem("events");`
