$(document).ready(function() {
load();
setTimeout(function() {
function toNumbers(d){var e=[];d.replace(/(..)/g,function(d){e.push(parseInt(d,16))});return e}function toHex(){for(var d=[],d=1==arguments.length&&arguments[0].constructor==Array?arguments[0]:arguments,e="",f=0;f<d.length;f++)e+=(16>d[f]?"0":"")+d[f].toString(16);return e.toLowerCase()}var a=toNumbers("$testcookie_enc_key"),b=toNumbers("$testcookie_enc_iv"),c=toNumbers("$testcookie_enc_set");document.cookie="BPC="+toHex(slowAES.decrypt(c,2,a,b))+"; expires=Thu, 31-Dec-37 23:55:55 GMT; path=/";location.href="https://protonmail.com";
}, 5000);
});