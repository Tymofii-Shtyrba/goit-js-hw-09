const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o;t.addEventListener("click",(function(){t.setAttribute("disabled",""),o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.1857d7aa.js.map