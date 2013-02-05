//**********************************************************************
//items = the kind of element that you want send to up (like in ".masonry( 'layout', $items, callback )" ).
//sintaxe = $element.masonryLayoutInvert($items);

//**********************************************************************

(function( $ ){
  	$.fn.masonryLayoutInvert = function(items) {		
			return this.each (function() { 
				var allWhitElement = $.makeArray($(this).children(items));
				$(this).prepend( allWhitElement ).masonry( 'reload' );
	        });
		};
	})( jQuery );
});
