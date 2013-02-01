/* 
   ____  __       __          _    __
  / __ \/ /_     / /_  ____ _(_)  / /
 / / / / __ \   / __ \/ __ `/ /  / / 
/ /_/ / / / /  / / / / /_/ / /  /_/  
\____/_/ /_/  /_/ /_/\__,_/_/  (_)   
                                     
Authors: Mathieu Zwygart & Charlie the unicorn

*/

(function($) {
    $.fn.ongletiseur = function(options) {
			var settings = $.extend({}, options);
			
			var tabsMenu = $(this).find('.tabs-menu'),
			tabs = $(this).find('.tab'),
			switchTab = function(target){
				tabs.hide();
				$(target).toggle();
				tabsMenu.find('li').removeClass('current');
				tabsMenu.find('a').each(function(){
					if( $(this).attr('href') == target){
						$(this).parent().addClass('current');
					}
				})
			}
			
			if(location.hash.length <= 0){
				switchTab(tabsMenu.find('a').first().attr('href'));
			}else{
				switchTab(location.hash)
			}
			
			$(window).hashchange(function(){
				switchTab(location.hash)
			});
			
			return this;
    };
})(jQuery);