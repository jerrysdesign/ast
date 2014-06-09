/*
 * Storage for jQuery Collapse
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function(t){function a(a){var i;try{i=window.localStorage||t.fn.collapse.cookieStorage}catch(r){i=!1}return i?new e(a,i):!1}function e(t,a){this.id=t,this.db=a,this.data=[]}var i="jQuery-Collapse";e.prototype={write:function(a,e){var r=this;r.data[a]=e?1:0,t.each(r.data,function(t){"undefined"==typeof r.data[t]&&(r.data[t]=0)});var n=this._getDataObject();n[this.id]=this.data,this.db.setItem(i,JSON.stringify(n))},read:function(){var t=this._getDataObject();return t[this.id]||[]},_getDataObject:function(){var t=this.db.getItem(i);return t?JSON.parse(t):{}}},jQueryCollapseStorage=a})(jQuery);