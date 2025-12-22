var h1 = React.createElement('h1', {id: "child1"}, 'I am Groot')
var h2 = React.createElement('h2', {id: "child2"}, 'I am not Groot')

var div = React.createElement('div', {class: "parent"}, [h2, h1])

var container = document.querySelector('#container')

var root = ReactDOM.createRoot(container)

root.render(div)