// const main = document.getElementsByClassName("home-heading");

// if(window.innerWidth <= 1200){
//   console.log("Success");
//   main.classList.add("center");
// }
// else{
//   console.log("failed");
// }

const main = document.getElementById('home');

if (window.innerWidth <= 1200) {
  console.log('Success');
  main.classList.add('center');
} else {
  console.log('failed');
}

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) nav.style.background = 'black';
  else nav.style.background = '';
});
