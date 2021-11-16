var video = document.querySelector('#player1');
var slider = document.querySelector("#slider");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	volume.innerHTML = slider.value + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	cur_speed = video.playbackRate;
	video.playbackRate = cur_speed * 0.95;
	console.log("New speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	cur_speed = video.playbackRate;
	video.playbackRate = cur_speed * 1.05;
	console.log("New speed is " + video.playbackRate);

})

document.querySelector("#skip").addEventListener("click", function() {
	cur_time = video.currentTime;
	console.log("Original location " + cur_time);
	/*total vid time is 1:07 or 67 seconds, so if skip happens
	 from 52 seconds or after, must go back to start */
	if (cur_time >= 52) {
		console.log("Going back to beginning")
		video.currentTime = 0;
	} else {
		video.currentTime = cur_time + 15;
	}
	console.log("New location " + video.currentTime)
})

var mute_btn = document.querySelector('#mute');

document.querySelector("button#mute").addEventListener("click", function() {
	if (mute_btn.innerText === "Unmute") {
		mute_btn.innerText = "Mute";
		video.muted = false;
	} else {
		mute_btn.innerText = "Unmute";
		video.muted = true;
	}
})

document.querySelector("#slider").addEventListener("mouseup", function() {
	percent = this.value / 100
	volume.innerHTML = this.value + "%";
	console.log(this.value + "%");
	video.volume = percent;
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
})

