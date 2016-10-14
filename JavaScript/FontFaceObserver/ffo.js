(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function x(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,D=null,E=null;function H(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,C=b||3E3,F=(new Date).getTime();return new Promise(function(a,b){null===E&&(E=!!document.fonts);if(E){var J=new Promise(function(a,b){function e(){(new Date).getTime()-F>=C?b():document.fonts.load(I(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){q=setTimeout(c,C)});Promise.race([K,J]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function t(){var b;
if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==u&&g==u&&h==u||f==v&&g==v&&h==v||f==w&&g==w&&h==w)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function G(){if((new Date).getTime()-F>=C)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===
a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,t();q=setTimeout(G,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,u=-1,v=-1,w=-1,d=document.createElement("div");d.dir="ltr";x(e,I(c,"sans-serif"));x(n,I(c,"serif"));x(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);u=e.a.offsetWidth;v=n.a.offsetWidth;w=p.a.offsetWidth;G();z(e,function(a){f=a;t()});x(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;t()});x(n,
I(c,'"'+c.family+'",serif'));z(p,function(a){h=a;t()});x(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

var fontA = new FontFaceObserver("LatoLightWeb");
var fontB = new FontFaceObserver("LoraWeb");
var fontC = new FontFaceObserver("LatoMediumWeb");

Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function () {
  
    document.documentElement.className += " fl";
});

document.cookie="fonts=1";