// FB sdk init
(function($){
	window.fbAsyncInit = function() {
        FB.init({
			appId      : '162636997135402',
			xfbml      : true,
			version    : 'v2.1'
        });
        fbReady = true;
        $(document).ready(function(){
        	window.app.controller.init();
		});
    };

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}).call(this, jQuery);
