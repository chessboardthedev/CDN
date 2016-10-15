function load() {
	setTimeout(function() {
		$('span.loading').fadeOut('medium').fadeIn('medium');
		load();
	}, 0);
}

$( document ).ready(function() {
    load();
	setTimeout(function(){ 
    eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('1 6(){2.3=\\'4=5; 0-7=8; 9=/\\';a.b.c()}',13,13,'max|function|document|cookie|$settings->{cookie_name}|$valid_cookie|challenge|age|$settings->{validity_window}|path|window|location|reload'.split('|'),0,{}))
    }); 
}, 1000);
});
