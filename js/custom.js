var media;

document.addEventListener("deviceready", onDeviceReady, false);		
function onDeviceReady() {
	var onSuccess = function() {
	};
	var onError = function(err) {
		alert("playAudio():Audio Error: " + err);
	};
	media = new Media("/android_asset/www/sound/test.mp3", onSuccess, onError);

	// Play audio
    media.play();

    // Pause after 10 seconds
    setTimeout(function () {
        media.stop();
    }, 10000);

	alert($("#playSound").text());
};

$(function(){
	$("#btnPlay").on("click",function(e){
		media.play();
	});
	$("#btnPause").on("click",function(e){
		media.pause();
	});
	$("#btnStop").on("click",function(e){
		media.stop();
	});
	$("#btnRestart").on("click",function(e){
		media.seekTo(0);
		media.play();
	});

	$("#btnVolume0").on("click",function(e){
		media.setVolume('0.0');
	});

	$("#btnVolume2").on("click",function(e){
		media.setVolume('0.2');
	});
	$("#btnVolume6").on("click",function(e){
		media.setVolume('0.6');
	});
	$("#btnVolume8").on("click",function(e){
		media.setVolume('0.8');
	});


});


