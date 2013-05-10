/*!
 * jquery.dropdownMenu.js
 *
 * @version   : 1.0.0
 * @author    : syuji-higa
 * @copyright : Web Mugen (http://web-mugen.com/)
 * @license   : The MIT License
 * @link      : http://web-mugen.com/javascript/jquery.dropdownMenu/
 * @modified  : 2013-04-30 17:05
 */

(function($){

	$.fn.dropdownMenu = function(option){

		// option
		var o = $.extend({
			spd: 200
		}, option);

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