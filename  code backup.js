let url = window.location.href
let str = url;

console.log(str.substr(str.lastIndexOf("?")+1));

let newvalue = (str.substr(str.lastIndexOf("?")+1));

console.log(newvalue);

if (newvalue == 'inspect') {

(function(){(function() {var x = document.createElement("script");x.src = "https://luphoria.com/fbl/fbl/firebug-lite-debug.js";x.onload = alert("Loaded Developer Console!");document.head.appendChild(x);})()})();
  
}

            if(window.location.href.indexOf("play.geforcenow.com") > -1) 
            {
                 alert("you are on geforce now");
            }

//bundle.js AND document 