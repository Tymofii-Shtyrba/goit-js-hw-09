!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){e.setAttribute("disabled",""),t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.2df4552c.js.map