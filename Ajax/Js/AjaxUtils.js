(function (global){
	//setting Up Name space For Ajax utitlity
	var ajaxUtils = {};

	//Returns HTTP request

	function getRequestObject(){

		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		} else if(window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}	else{
			global.alert("Ajax Is Not Supported !");
			return(null);
		}
	}

	// The Main Function
	// Makes an Ajax Get Request to Request URL

	ajaxUtils.sendGetRequest = function(requestUrl, responceHandler){
		var request = getRequestObject();
		request.onreadystatechange = function (){
			handleResponce(request, responceHandler);
		};
		request.open("GET", requestUrl, true);
		request.send(null);
	}


	// Handle Responce Function

	function handleResponce(request, responceHandler){
		if((request.readyState == 4) && (request.status == 200)){
			responceHandler(request);
		}
	}

	// Exposing The ajax plugin for global

	global.$ajaxUtils = ajaxUtils;

	
})(window);