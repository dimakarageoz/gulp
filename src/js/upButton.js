
const doc = document.getElementById('container');
const button = document.createElement('div');
// button.classList.add('up-button');
// button.classList.add('hidden');
button.id = 'upButton';

button.addEventListener('click', () => {
    const animation = () => {
        document.body.scrollTop-=70;
        document.documentElement.scrollTop-=70;
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
            requestAnimationFrame(animation);
        }
    };
    animation();
});

window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        button.classList.remove('hidden');        
        button.classList.add('up-button');
    } else {
        button.classList.remove('up-button');
        button.classList.add('hidden');
    }
});

doc.appendChild(button);