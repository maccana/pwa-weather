// Simple script to check if the browser has Service Worker capability

$(function(){
	if(window.Worker){
		console.log("Browser is Service Worker compatible");
	} else {
		console.log("Browser is not Service Worker compatible");
	}
});