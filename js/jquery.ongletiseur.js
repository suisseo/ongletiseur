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
			var settings = $.extend({ activeClass: 'active' }, options);
			
			var tabsMenu = $(this).find('.tabs-menu'),
			tabs = $(this).find('.tab'),
			switchTab = function(tab){
				tabs.hide();
				$(tab).toggle();
				tabsMenu.find('li').removeClass(settings.activeClass);
				tabsMenu.find('a').each(function(){
					if( $(this).attr('href') == tab){
						$(this).parent().addClass(settings.activeClass);
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