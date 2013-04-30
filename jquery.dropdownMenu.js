(function($){

	$.fn.dropdownMenu = function(option){

		var o = $.extend({
			spd: 200
		}, option);

		var $wrap = $(this),
			$li   = $wrap.find('li'),
			$ul   = $li.find('ul');

		$ul.hide();

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