// Dark mode toggle
document.addEventListener("DOMContentLoaded",()=>{
const t=document.getElementById("darkToggle");if(t)t.onclick=()=>document.body.classList.toggle("dark");
const b=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{if(b)b.style.display=window.scrollY>300?"block":"none";});
if(b)b.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
});
