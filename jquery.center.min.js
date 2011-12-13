/* Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.3
*
* Requires: jQuery 1.2.6+
*/
;(function(b,a){b.fn.center=function(c){var d,e;d=b(a);e=d.scrollTop();return this.each(function(){var h,g,f;h=b(this);g=b.extend({against:"window",top:false,topPercentage:0.5},c);f=function(){var k,j,i,l;k=g.against;if(k==="window"){j=d;}else{if(k==="parent"){j=h.parent();e=0;}else{j=h.parents(k);e=0;}}i=((j.width())-(h.outerWidth()))*0.5;l=((j.height())-(h.outerHeight()))*g.topPercentage+e;if(g.top){l=g.top+e;}h.css({left:i,top:l});};f();d.resize(f);});};})(jQuery,window);