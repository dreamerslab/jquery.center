/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.3
*
* Requires: jQuery 1.2.6+
*/
;( function( $, window ){
  $.fn.center = function( options ){
    var $w, scrollTop;
    
    $w        = $( window ); // cache gobal
    scrollTop = $w.scrollTop();

    return this.each( function(){
      var $this, configs, centerize;
      
      $this = $( this ); // cache $( this )
      // merge user options with default configs
      configs = $.extend({
        against : 'window',
        top : false,
        topPercentage : 0.5
      }, options );
    
      centerize = function(){
        var against, $against, x, y;
        
        against = configs.against;
        
        if( against === 'window' ){
          $against = $w;
        }else if( against === 'parent' ){
          $against = $this.parent();
          scrollTop = 0;
        }else{
          $against = $this.parents( against );
          scrollTop = 0;
        }
      
        x = (( $against.width()) - ( $this.outerWidth(true))) * 0.5; // With jQuery-1.8.1, $this.outerWidth() return a DOM Element, not a number,i use $this.outerWidth(true) to solve this problem.
        y = (( $against.height()) - ( $this.outerHeight(true))) * configs.topPercentage + scrollTop; // the same question to $this.outerHeight() With jQuery-1.8.1

        if( configs.top ) y = configs.top + scrollTop;

        $this.css({
          'left' : x,
          'top' : y
        });
      };
    
      // apply centerization
      centerize();
      $w.resize( centerize );
    });
  };
})( jQuery, window );
