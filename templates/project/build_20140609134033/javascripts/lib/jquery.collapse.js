/*
 * Collapse plugin for jQuery
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function(e){function t(t,n){n=n||{};var i=this,o=n.query||"> :even";e.extend(i,{$el:t,options:n,sections:[],isAccordion:n.accordion||!1,db:n.persist?jQueryCollapseStorage(t.get(0).id):!1}),i.states=i.db?i.db.read():[],i.$el.find(o).each(function(){new jQueryCollapseSection(e(this),i)}),function(t){i.$el.on("click","[data-collapse-summary] "+(t.options.clickQuery||""),e.proxy(i.handleClick,t)),i.$el.bind("toggle close open",e.proxy(i.handleEvent,t))}(i)}function n(t,n){n.options.clickQuery||t.wrapInner('<a href="#"/>'),e.extend(this,{isOpen:!1,$summary:t.attr("data-collapse-summary",""),$details:t.next(),options:n.options,parent:n}),n.sections.push(this);var i=n.states[this._index()];0===i?this.close(!0):this.$summary.is(".open")||1===i?this.open(!0):this.close(!0)}t.prototype={handleClick:function(t,n){t.preventDefault();for(var n=n||"toggle",i=this.sections,o=i.length;o--;)if(e.contains(i[o].$summary[0],t.target)){i[o][n]();break}},handleEvent:function(e){return e.target==this.$el.get(0)?this[e.type]():(this.handleClick(e,e.type),void 0)},open:function(t){return isFinite(t)?this.sections[t].open():(e.each(this.sections,function(e,t){t.open()}),void 0)},close:function(t){return isFinite(t)?this.sections[t].close():(e.each(this.sections,function(e,t){t.close()}),void 0)},toggle:function(t){return isFinite(t)?this.sections[t].toggle():(e.each(this.sections,function(e,t){t.toggle()}),void 0)}},n.prototype={toggle:function(){this.isOpen?this.close():this.open()},close:function(e){this._changeState("close",e)},open:function(t){var n=this;n.options.accordion&&!t&&e.each(n.parent.sections,function(e,t){t.close()}),n._changeState("open",t)},_index:function(){return e.inArray(this,this.parent.sections)},_changeState:function(t,n){var i=this;i.isOpen="open"==t,e.isFunction(i.options[t])&&!n?i.options[t].apply(i.$details):i.$details[i.isOpen?"show":"hide"](),i.$summary.toggleClass("open","close"!=t),i.$details.attr("aria-hidden","close"==t),i.$summary.attr("aria-expanded","open"==t),i.$summary.trigger("open"==t?"opened":"closed",i),i.parent.db&&i.parent.db.write(i._index(),i.isOpen)}},e.fn.extend({collapse:function(n,i){var o=i?e("body").find("[data-collapse]"):e(this);return o.each(function(){var o=i?{}:n,s=e(this).attr("data-collapse")||"";e.each(s.split(" "),function(e,t){t&&(o[t]=!0)}),new t(e(this),o)})}}),e(function(){e.fn.collapse(!1,!0)}),jQueryCollapse=t,jQueryCollapseSection=n})(window.jQuery);