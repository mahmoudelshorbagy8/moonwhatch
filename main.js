let meun = document.querySelector('#meunbar');
let nav = document.querySelector('.navbar');
let serch = document.querySelector('#searchicon');
let put = document.querySelector('form');

// navbar/
meun.onclick = () =>{
  meun.classList.toggle('fa-times');
  nav.classList.toggle('active');
  
  // remove box search//
  
  serch.classList.remove('fa-times');
  put.classList.remove('active');
  
}
// box search //
serch.onclick = () => {
  serch.classList.toggle('fa-times');
  put.classList.toggle('active');
  
  // remove navbar//
  
  meun.classList.remove('fa-times');
  nav.classList.remove('active');
}
// remove with scroll //

window.onscroll = () => {
  meun.classList.remove('fa-times');
  nav.classList.remove('active');
  serch.classList.remove('fa-times');
  put.classList.remove('active');

}

