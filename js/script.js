// resize skills
window.addEventListener("resize", setSkillHeight());

function setSkillHeight() {
	var skills = document.getElementsByClassName("skill-set");
	for (var i = 0; i < skills.length; i++) {
		var width = parseInt(window.getComputedStyle(skills[i]).width);
		var height = 0.6 * width;
		skills[i].style.height = (height + "px");
	}      
}

// hide and show projects details
$("#project1-more").click(function() {
     $("#project1-detail").show();
     $("#project1-more").hide();
});
$("#project1-less").click(function() {
     $("#project1-detail").hide();
     $("#project1-more").show();
});

$("#project2-more").click(function() {
     $("#project2-detail").show();
     $("#project2-more").hide();
});
$("#project2-less").click(function() {
     $("#project2-detail").hide();
     $("#project2-more").show();
});

$("#project3-more").click(function() {
     $("#project3-detail").show();
     $("#project3-more").hide();
});
$("#project3-less").click(function() {
     $("#project3-detail").hide();
     $("#project3-more").show();
});