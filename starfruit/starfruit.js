var looper;
var degrees = 0;
function rotateAnimation(img,5){
	var elem = document.getElementById(img);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";

	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}