function myTest1(){var l=document.getElementById("myModal"),m=document.getElementById("myImg1"),t=document.getElementById("img01");m.onclick=function(){l.style.display="block",t.src=this.src},document.getElementsByClassName("close")[0].onclick=function(){l.style.display="none"}}function myTest2(){var l=document.getElementById("myModal"),m=document.getElementById("myImg2"),t=document.getElementById("img01");m.onclick=function(){l.style.display="block",t.src=this.src},document.getElementsByClassName("close")[0].onclick=function(){l.style.display="none"}}function init(){const l=document.getElementById("theme-change"),m=document.getElementById("theme-change-overlay"),t=document.getElementById("theme-sun"),s=document.getElementById("theme-sun-overlay"),n=document.getElementById("theme-moon"),o=document.getElementById("theme-moon-overlay"),e=document.getElementById("html");e&&l.addEventListener("click",()=>{e.classList.contains("theme-dark")?(e.classList.remove("theme-dark"),e.classList.toggle("theme-light"),t.classList.remove("dark"),t.classList.toggle("light"),n.classList.remove("dark"),n.classList.toggle("light")):(e.classList.remove("theme-light"),e.classList.toggle("theme-dark"),t.classList.remove("light"),t.classList.toggle("dark"),n.classList.remove("light"),n.classList.toggle("dark"))}),e&&m.addEventListener("click",()=>{e.classList.contains("theme-dark")?(e.classList.remove("theme-dark"),e.classList.toggle("theme-light"),s.classList.remove("dark"),s.classList.toggle("light"),o.classList.remove("dark"),o.classList.toggle("light")):(e.classList.remove("theme-light"),e.classList.toggle("theme-dark"),s.classList.remove("light"),s.classList.toggle("dark"),o.classList.remove("light"),o.classList.toggle("dark"))})}function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}window.onload=init;