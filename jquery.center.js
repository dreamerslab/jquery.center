/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.0
*
* Requires: jQuery 1.2.6+
*/

$.fn.center = function( options ){
  
  // cache gobal
  var $w = $( window ),

  scrollTop = $w.scrollTop();

  return this.each( function(){
    
    // cache $( this )
    var $this = $( this ),
    
    // merge user options with default settings
    settings = $.extend({
      against : 'window',
      top : false,
      topPercentage : 0.5
    }, options ),
    
    centerize = function(){
      var $against, x, y;
      
      if( settings.against === 'window' ){
        $against = $w;
      }else if( settings.against === 'parent' ){
        $against = $this.parent();
        scrollTop = 0;
      }else{
        $against = $this.parents( against );
        scrollTop = 0;
      }
      
      x = (( $against.width()) - ( $this.outerWidth())) * 0.5;
      y = (( $against.height()) - ( $this.outerHeight())) * settings.topPercentage + scrollTop;

      if( settings.top ) y = settings.top + scrollTop;

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