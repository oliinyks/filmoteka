console.log("Hi"),console.log("HI");const e=document.querySelector(".movies-cardset");document.getElementById("myLibrary");localStorage.setItem("testData",JSON.stringify([{id:299536,poster_path:"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",title:"Avengers: Infinity War",genre_ids:[28,12,14,878],release_date:"2018-04-25",vote_average:8.3},{id:383498,poster_path:"/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",title:"Deadpool 2",genre_ids:[28,35,878],release_date:"2018-05-15",vote_average:7.6},{id:500664,poster_path:"/adOzdWS35KAo21r9R4BuFCkLer6.jpg",title:"Upgrade",genre_ids:[28,878,53],release_date:"2018-06-01",vote_average:7.6}]));let a=localStorage.getItem("testData");a=JSON.parse(a);const t=a.map((({poster_path:e,title:a,genre_ids:t,vote_average:n,release_date:o})=>`\n     <li class="movie-card">\n        <a href="" class="movie-card__link link">\n            <img src="${e}" width="395" height="574" alt="${a}" class="movie-card__image">\n            <h3 class="movie-card__title">${a}</h3>\n            <div class="movie-card__info">\n                <span class="movie-card__genre">${t}</span> \n            |\n            <span class="movie-card__year">${o}</span>\n            <span class="movie-card__rate">${n}</span>\n            </div>\n        </a>\n        </li>\n    `)).join("");e.insertAdjacentHTML("beforeend",t);const n=document.querySelector(".modal-movie-card");localStorage.setItem("testData",JSON.stringify([{id:299536,poster_path:"https://upload.wikimedia.org/wikipedia/ru/thumb/0/05/Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg/548px-Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg",title:"Avengers: Infinity War",genre_ids:[28,12,14,878],vote_average:8.3,vote_count:20306,popularity:173.039,overview:"When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure."}]));let o=localStorage.getItem("testData");o=JSON.parse(o);const d=o.map((({poster_path:e,title:a,genre_ids:t,vote_average:n,vote_count:o,popularity:d,overview:s})=>`\n\n    <div class="modal-card__img-wrapper">\n      <img src="${e}" alt="${a}" class="lazyload" />\n    </div>\n    <div class="modal-card__film-desсriptoin">\n      <h3 class="modal-card__film-title">${a}</h3>\n      <table class="modal-card__table">\n        <tr>\n          <td class="modal-card__table-refs">Vote / Votes</td>\n          <td class="modal-card__table-value">\n           <span class="modal__item-desc--orange">${n}</span>\n           <span>/</span>\n            <span class="modal__item-desc--grey">${o}</span>\n\n          </td>\n        </tr>\n        <tr>\n          <td class="modal-card__table-refs">Popularity</td>\n          <td class="modal-card__table-value">${d}</td>\n        </tr>\n        <tr>\n          <td class="modal-card__table-refs">Original Title</td>\n          <td class="modal-card__table-value">${a}</td>\n        </tr>\n        <tr>\n          <td class="modal-card__table-refs">Genre</td>\n          <td class="modal-card__table-value">${t}</td>\n        </tr>\n      </table>\n      <p class="modal-card__about">About</p>\n      <p class="modal-card__description">\n       ${s}\n      </p>\n      <div class="modal-card__button-wrapper">\n        <button class="modal-card__button add-to-watched" data-modal-watched>\n          add to Watched\n        </button>\n        <button class="modal-card__button add-to-queue" data-modal-queue>\n          add to queue\n        </button>\n      </div>\n    </div>\n    `)).join("");n.insertAdjacentHTML("beforeend",d);const s=document.querySelector(".movie-card"),r=document.querySelector("[data-modal-close]"),l=document.querySelector(".js-backdrop");function i(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",c)}function c(e){"Escape"===e.code&&i()}s.addEventListener("click",(function(){document.body.classList.add("show-modal"),window.addEventListener("keydown",c)})),r.addEventListener("click",i),l.addEventListener("click",(function(e){e.currentTarget===e.target&&i()}));
//# sourceMappingURL=index.88004003.js.map
