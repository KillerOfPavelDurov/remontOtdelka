(function () {
	 
	 var scroll = function () {
		 var s = window.pageYOffset;
		 var header = document.getElementById("header");
		 header.style.backgroundPositionY = -s + "px";
	 }
	 window.addEventListener("scroll", scroll);
	 
 })();
 
 function avtorisation () {
	 
 };