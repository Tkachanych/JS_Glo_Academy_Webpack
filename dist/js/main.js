(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l;const n=()=>{let e=(()=>{let e=(new Date("28 february 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/3600),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();var n;e.timeRemaining<0?clearInterval(l):(n=e,t.textContent=1===String(n.hours).length?`0${n.hours}`:n.hours,a.textContent=("0"+n.minutes).slice(-2),r.textContent=("0"+n.seconds).slice(-2))};n(),l=setInterval(n,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),a=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),a.addEventListener("click",l),r.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),a=t.querySelector(".popup-close"),r=t.querySelector(".popup-content");let l,n=0,c=0;const o=()=>document.documentElement.clientWidth>=768,u=()=>{r.style.display="block",l=requestAnimationFrame(u),c<70&&o()?(r.style.transform=`scale(${c}%)`,c+=5):(cancelAnimationFrame(l),r.style.transform="",c=0)},s=()=>{l=requestAnimationFrame(s),t.style.display="block",r.style.display="none",c<100&&o()?(t.style.width=`${c}%`,t.style.height=`${c}%`,c+=5):(cancelAnimationFrame(l),c=0,t.style.width="",t.style.height="",u())},i=()=>{l=requestAnimationFrame(i),n-=10,r.getBoundingClientRect().right>0&&o()?r.style.transform=`translateX(${n}%)`:(cancelAnimationFrame(l),n=0,r.style.transform="",t.style.display="none")};e.forEach((e=>{e.addEventListener("click",s)})),a.addEventListener("click",i)})(),(()=>{const e=document.querySelectorAll(".calc-item");document.getElementById("form2-name").classList.add("form-name");const t=document.querySelectorAll(".form-name"),a=document.querySelectorAll(".form-phone"),r=document.querySelectorAll(".form-email"),l=document.querySelector(".mess"),n=/[^а-яё-\s]+/gi,c=/[^\d\(\)\-\+]+/g,o=/[^a-z0-9\@\_\-\.\!\~\*\']+/gi,u=e=>e.replace(/^[\s\-]+/g,"").replace(/[\s\-]+$/g,"").replace(/[\-]{2,}/g,"-").replace(/[\s]{2,}/g," ");e.forEach((e=>{/calc-type/.test(e.className)||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(n,""),e.target.value=u(e.target.value),e.target.value=e.target.value.replace(/([\bа-яё]+)/gi,(e=>e[0].toLocaleUpperCase()+e.substring(1).toLocaleLowerCase()))}))})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),l.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(n,""),e.target.value=u(e.target.value)})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(o,""),e.target.value=u(e.target.value)}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(c,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(c,""),e.target.value=u(e.target.value)}))})),document.getElementById("form2-name").classList.remove("form-name")})()})();