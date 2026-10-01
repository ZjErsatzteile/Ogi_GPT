const menu=document.querySelector(".menu");
const links=document.querySelector(".links");
menu?.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("repairForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=e.target.elements.name.value.trim()||"Danke";
  const box=document.getElementById("success");
  box.textContent=`Vielen Dank, ${name}! Ihre Demo-Anfrage wurde erfasst.`;
  box.style.display="block";
  e.target.reset();
});