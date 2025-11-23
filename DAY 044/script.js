var btn = document.querySelector('main button');
btn.addEventListener('click', function(){
    var h1 = document.createElement('h1');

    h1.innerHTML = 'New Heading';
    h1.style.color = 'salmon';

    var main = document.querySelector('main');
    main.appendChild(h1);
})