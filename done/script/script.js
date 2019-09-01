$(document).ready(function() {
	$(this).replaceWith("<h1>JQuery is Great</h1>");
	$(this).remove( );
	/**/
	$(this).before('<div class="div"></div>' );
	$(this).after( '<div class="div"></div>' )
	/**/
	$(this).append('<div class = "div"></div>' );

	$(this).clone().insertAfter(this);

	$(this).empty()


});