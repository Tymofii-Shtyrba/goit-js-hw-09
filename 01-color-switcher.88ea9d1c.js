!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(){e.toggleAttribute("disabled"),n.toggleAttribute("disabled")}n.setAttribute("disabled",""),e.addEventListener("click",(function(){o(),t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),o()}))}();
//# sourceMappingURL=01-color-switcher.88ea9d1c.js.map
