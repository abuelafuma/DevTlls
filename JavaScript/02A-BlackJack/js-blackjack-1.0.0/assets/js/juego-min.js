(()=>{"use strict";let e=["Ana","Mercy","Mei"];console.log(e)})();const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener");document.querySelector("#btnNuevo");let o=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),d=(t=2)=>{e=i(),l=[];for(let r=0;r<t;r++)l.push(0);s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},i=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(l+a);for(let n of t)for(let o of r)e.push(o+n);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},c=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(l[t]=l[t]+c(e),s[t].innerText=l[t],l[t]),h=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),o[t].append(r)},f=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("Nadie gana :("):e>21?alert("Computadora gana"):t>21?alert("Jugador Gana"):alert("Computadora Gana")},100)},g=e=>{let t=0;do{let r=u();t=$(r,l.length-1),h(r,l.length-1)}while(t<e&&e<=21);f()};return a.addEventListener("click",()=>{let e=u(),t=$(e,0);h(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),a.disabled=!0,n.disabled=!0,g(t)):21===t&&(console.warn("21, genial!"),a.disabled=!0,n.disabled=!0,g(t))}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,g(l[0])}),{nuevoJuego:d}})();