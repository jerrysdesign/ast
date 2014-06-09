/*
 * Cookie Storage for jQuery Collapse
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function(e){var t={expires:function(){var e=new Date;return e.setDate(e.getDate()+1)}(),setItem:function(e,t){document.cookie=e+"="+t+"; expires="+this.expires+"; path=/"},getItem:function(t){t+="=";var n="";return e.each(document.cookie.split(";"),function(e,i){for(;" "==i.charAt(0);)i=i.substring(1,i.length);0===i.indexOf(t)&&(n=i.substring(t.length,i.length))}),n}};e.fn.collapse.cookieStorage=t})(jQuery);