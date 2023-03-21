// const main = document.getElementsByClassName("home-heading");

// if(window.innerWidth <= 1200){
//   console.log("Success");
//   main.classList.add("center");
// }
// else{
//   console.log("failed");
// }


const main = document.getElementById('home');

const nav = document.querySelector('.navbar');


if(window.innerWidth <= 990){
  nav.classList.add('bg-dark')
}


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) nav.style.background = 'black';
  else nav.style.background = '';
});


if (window.innerWidth <= 1200) {
  console.log('Success');
  main.classList.add('center');
} else {
  console.log('failed');
}
