let url = window.location.href
let str = url;

console.log(str.substr(str.lastIndexOf("%2F%3F")+1));

let newvalue = (str.substr(str.lastIndexOf("%2F%3F")+1));

console.log(newvalue);

if (newvalue == '2F%3Finspect') {

(function(){(function() {var x = document.createElement("script");x.src = "https://luphoria.com/fbl/fbl/firebug-lite-debug.js";x.onload = alert("Loaded Developer Console!");document.head.appendChild(x);})()})();
  
}



//bundle.js and document.js