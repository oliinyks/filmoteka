const e=document.querySelector(".button-watched"),a=document.querySelector(".button-queue"),t=document.querySelector(".library-list"),n=document.querySelector(".libry-empty");function r(e){n.innerHTML="",t.innerHTML="";const a=e.map((({poster_path:e,title:a,id:t,genres:n,release_date:r,vote_average:l})=>{const i=n.map((e=>e.name)),o=parseInt(r);return`<li class="gallery__item movie-card" data-id=${t}>\n        <a href="#" class="gallery__link movie-card__link link" data-id=${t}>\n    <div class="gallery__wrapper" data-id=${t}>\n\n        <img\n            class="gallery__img movie-card__image"\n            src="https://www.themoviedb.org/t/p/w500${e}"\n            alt="${a}"\n            loading="lazy"\n            data-id=${t}\n            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"\n            >\n          </div>\n          <div class="gallery__thumb movie-card__info" data-id=${t}>\n              <h3 class="gallery__name movie-card__title" data-id=${t}>${a}</h3>\n             <p class="gallery__genres movie-card__genre" data-id=${t}>${i}</p>\n              <span class="gallery__year movie-card__year" data-id=${t}>${o||"n/a"}</span>\n          </div>\n          </a>\n      </li>`})).join("");t.insertAdjacentHTML("beforeend",a)}e.addEventListener("click",(function(e){e.preventDefault(e);const a=JSON.parse(localStorage.getItem("watchResults"));console.log("🚀 ~ file: renderLocalStorage.js ~ line 69 ~ onBtnClick ~ savedMovie",a),r(a)})),a.addEventListener("click",(function(e){e.preventDefault(e);const a=JSON.parse(localStorage.getItem("queueResult"));console.log("🚀 ~ file: renderLocalStorage.js ~ line 69 ~ onBtnClick ~ savedMovie",a),r(a)}));
//# sourceMappingURL=my-library.aa37fc0b.js.map
