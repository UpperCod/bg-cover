!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.bgCover=t()}(this,function(){function e(e,t,i){var n=e.height/e.width,o=t.height/t.width,d=o>n?1:n/o;i.style.width="100%",i.style.position="absolute",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%,-50%) scale("+d+")",i.style.objectFit="cover"}return function t(i){var n,o=i.parentElement,d=window.getComputedStyle(o).position,s={width:o.clientWidth,height:o.clientHeight};switch(/relative|fixer|absolute/.test(d)||(o.style.position="relative"),o.style.overflow="hidden",i.style.width="100%",i.nodeName){case"VIDEO":n=function(){return e(s,{width:i.videoWidth,height:i.videoHeight},i)},4===i.readyState?n():i.addEventListener("loadedmetadata",n);break;case"IMG":n=function(){return e(s,{width:i.clientWidth,height:i.clientHeight},i)},i.complete?n():i.addEventListener("load",n)}i.dataset.coverResize||(i.dataset.coverResize="listener",window.addEventListener("resize",function(){return t(i)}))}});
//# sourceMappingURL=bg-cover.umd.js.map
