// const refs = {
// 	arrowTop: document.querySelector('.arrow-top'),
// 	headerHome: document.querySelector('.overlay'),
// }

// function arrowScrollTop() {
//   if (window.scrollY > 50) {
// 	refs.arrowTop.classList.add('arrow-show');
// 	refs.arrowTop.classList.remove('arrow-hidden');
//   } else {
// 	refs.arrowTop.classList.add('arrow-hidden');
// 	refs.arrowTop.classList.remove('arrow-show');
//   }

//   refs.arrowTop.addEventListener('click', () => {
// 	refs.headerHome.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   });
// }

// window.addEventListener('scroll', arrowScrollTop);

const arrowTop = document.querySelector('.arrow-top');
const container = document.querySelector('.container');
const headerHome = document.querySelector('.overlay');

container.addEventListener('scroll', function(e) {
	span.innerText = 'container.scrollTop: ' + container.scrollTop;
	arrowTop.classList.add('arrow-hidden');
 });
 
 arrowTop.addEventListener('click', () => {
		refs.headerHome.scrollIntoView({
	      behavior: 'smooth',
	      block: 'start',
	    });
		 arrowTop.classList.remove('arrow-hidden');
	  });
	