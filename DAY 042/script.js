var h1 = document.querySelector('h1')

h1.innerHTML = 'Hi :)'

h1.style.color = 'white'

// h1.addEventListener('click', function(){
//     console.log('you clicked on h1..')
// })

h1.addEventListener('dblclick', function(){
    console.log('you double-clicked on h1..');
})

var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    h1.innerHTML = 'I am batman';
    h1.style.color = 'red';
    h1.style.backgroundColor = 'white';
})