window.addEventListener("resize", setSkillHeight());

function setSkillHeight() {
	var skills = document.getElementsByClassName("skill-set");
	for (var i = 0; i < skills.length; i++) {
		var width = parseInt(window.getComputedStyle(skills[i]).width);
		var height = 0.6 * width;
		skills[i].style.height = (height + "px");
	}      
}

// window.addEventListener("resize", function(e) {
//     var mapElement = document.getElementById("map");
//     mapElement.style.height = mapElement.offsetWidth * 1.72;
// });