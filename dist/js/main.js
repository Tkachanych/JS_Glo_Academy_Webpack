(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let a;const o=()=>{const e=(()=>{const e=(new Date("05 march 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/3600),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();var o;e.timeRemaining<0?clearInterval(a):(o=e,t.textContent=1===String(o.hours).length?`0${o.hours}`:o.hours,n.textContent=`0${o.minutes}`.slice(-2),r.textContent=`0${o.seconds}`.slice(-2))};o(),a=setInterval(o,1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),n=t.querySelector("a"),r=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(t=>{if(t.target.parentNode===n&&(t.preventDefault(),document.querySelector(t.target.parentNode.getAttribute("href")).scrollIntoView({block:"start",behavior:"smooth"})),t.target.closest(".active-menu")&&!t.target.classList.contains("active-menu"))return t.preventDefault(),r(),void document.querySelector(t.target.getAttribute("href")).scrollIntoView({block:"start",behavior:"smooth"});(t.target.closest(".menu")&&!t.target.closest(".active-menu")||t.target.classList.contains("close-btn")||t.target!==e&&e.classList.contains("active-menu"))&&r()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content");let r,a=0,o=0;const c=()=>document.documentElement.clientWidth>=768,s=()=>{n.style.display="block",r=requestAnimationFrame(s),o<70&&c()?(n.style.transform=`scale(${o}%)`,o+=5):(cancelAnimationFrame(r),n.style.transform="",o=0)},l=()=>{r=requestAnimationFrame(l),t.style.display="block",n.style.display="none",o<100&&c()?(t.style.width=`${o}%`,t.style.height=`${o}%`,o+=5):(cancelAnimationFrame(r),o=0,t.style.width="",t.style.height="",s())},i=()=>{r=requestAnimationFrame(i),a-=10,n.getBoundingClientRect().right>0&&c()?n.style.transform=`translateX(${a}%)`:(cancelAnimationFrame(r),a=0,n.style.transform="",t.style.display="none")};e.forEach((e=>{e.addEventListener("click",l)})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||i()}))})(),(()=>{const e=document.querySelectorAll(".calc-item");document.getElementById("form2-name").classList.add("form-name");const t=document.querySelectorAll(".form-name"),n=document.querySelectorAll(".form-phone"),r=document.querySelectorAll(".form-email"),a=document.querySelector(".mess"),o=/[^а-яё-\s]+/gi,c=/[^\d\(\)\-\+]+/g,s=/[^a-z0-9\@\_\-\.\!\~\*\']+/gi;e.forEach((e=>{/calc-type/.test(e.className)||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")}))})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(s,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(c,"")}))})),document.getElementById("form2-name").classList.remove("form-name")})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const r=e.target.closest(".service-header-tab");r&&t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}))})()})();