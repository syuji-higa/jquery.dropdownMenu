/*!
 * jquery.dropdownMenu.js
 *
 * @version   : 1.0.1
 * @author    : syuji-higa
 * @copyright : syuji-higa (https://github.com/syuji-higa)
 * @license   : The MIT License
 * @link      : http://deom.syuji-higa.com/javascript/jquery.dropdownMenu/sample
 * @modified  : 2013-08-10 21:00
 */

(function($){

	$.fn.dropdownMenu = function(options){

		// options
		var o = $.extend({
			spd: 200
		}, options);

		var $wrap = $(this),
		    $li   = $wrap.find('li'),
		    $ul   = $li.find('ul');

		/* ==============================
			first ran
		============================== */

		$ul.hide();

		/* ==============================
			events
		============================== */

		$li.hover(
			function(){
				var $self = $(this);
				$self.find('> ul').not(':animated').css('visibility', 'visible').fadeIn(o.spd);
				$self.find('> ul > li').not(':animated').hide().slideDown(o.spd);
				$self.find('> ul > li ul').css('visibility', 'hidden');
			},
			function(){
				var $self = $(this);
				$self.find('> ul').fadeOut(o.spd, function(){
					$self.find('ul').css('visibility', 'hidden');
				});
				$self.find('> ul > li').slideUp(o.spd);
			}
		);

	}

})(jQuery);