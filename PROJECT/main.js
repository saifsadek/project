let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let scroll = document.querySelector('.scroll');
window.onscroll = function(){
let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value *4 + 'px';
mountains3.style.top = value * 2 + 'px';
mountains4.style.top = value * 1.5 + 'px';
boat.style.top = value + 'px';
river.style.top = value + 'px';

boat.style.left = value * 3 + 'px';
scroll.style.fontSize = value  + 'px';
if(scrollY>=81){
    scroll.style.fontSize = 81 + 'px';
    scroll.style.position = 'fixed';
    if(scroll>=478){
        scroll.style.display = 'none';

    }else{
        scroll.style.display = 'block';

    }

}

if(scrollY>=85){
    document.querySelector('.main').style.background = 'linear-gradient(rgb(32 110 92),rgba(24, 0, 21, 0.842))'
}else{
    document.querySelector('.main').style.background =  'linear-gradient(rgb(31, 1, 8),rgba(24, 0, 21, 0.842))'

}






}