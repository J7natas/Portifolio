const titulo = document.querySelector('#desen');
typeWeriter(titulo);

function typeWeriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(()=>{
        elemento.innerHTML += letra;
       }, 145 * i)
    })

}

const debounce = function(func, whait,  imediat) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!imediat) func.apply(context, args);
        };
        const calNow = imediat && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, whait);
        if(calNow) func.apply(context, args);
    }
}


const target = document.querySelectorAll('[data-anime]');
const animation = 'animete';

function animeScrol(){
   const Topwin = window.pageYOffset + ((window.innerHeight * 3) / 4);
   target.forEach(function(element) {
        if((Topwin) > element.offsetTop){
            element.classList.add(animation);
        }else {
            element.classList.remove(animation);
        }
   })
}

animeScrol();

if(target.length){
    window.addEventListener('scroll', debounce(function() {
        animeScrol();
    }, 200 ));
}
