import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as m,f as h}from"./assets/vendor-77e16229.js";const e=document.getElementById("datetime-picker");e.classList.add("time-changer");e.style.width="200px";e.style.height="20px";e.style.borderRadius="5px";const n=document.querySelector("button[data-start]"),t=document.querySelector(".timer");let o=0,i=0;n.disabled=!0;n.addEventListener("click",()=>{o||(o=setInterval(d,1e3),t.classList.add("value"),t.classList.add("field"),t.classList.add("label"))});function d(){const s=new Date().getTime(),a=i-s;if(t.classList.add("value"),t.classList.add("field"),t.classList.add("label"),n.disabled=!1,a<=0){clearInterval(o),o=0,t.textContent="Час вийшов!",m.show({title:"Alert",message:"This date was in the past. Choose another one",position:"topRight",timeout:3e3}),n.disabled=!0;return}const l=Math.floor(a/(1e3*60*60*24)),r=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(a%(1e3*60*60)/(1e3*60)),u=Math.floor(a%(1e3*60)/1e3);t.textContent=` ${l} days, ${r} hours, ${c} minutes, ${u} seconds`}e.addEventListener("change",()=>{const s=e.value;i=new Date(s).getTime()});h(e,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){i=s[0].getTime(),d()}});
//# sourceMappingURL=commonHelpers.js.map
