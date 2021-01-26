currentDesign = "design1";
bgTone = "d";
path1Tone = "l";
logoSrc = ("images/pro/logos" + currentDesign + bgTone + path1Tone + ".svg");
sponsorSrc = ("images/pro/sponsors" + currentDesign + bgTone + path1Tone + ".svg");
sponsorOnOff = "off";
currentPath1 = "";
backupPath1 = "";
currentPath2 = "";  //for sponsors
backupPath2 = ""; //for sponsors

/* Identifty which color button was clicked */

let color = document.getElementsByClassName("color");
	for (let i = 0; i < color.length; i++) {
		color[i].onclick = changeColor;
	}

/* Get hex value and identify the correct path for color button pressed and change the fill color*/

function changeColor(e) {
	let hexNew = e.target.getAttribute("data-hex"); // Find data-hex (colour) value for the colour selected
	let pathChosen = e.target.getAttribute("data-path"); // Find which path to change colour of for the colour selected
	let toneNew = e.target.getAttribute("tone"); // Find data-hex (colour) value for the colour selected



	let classNew = e.target.getAttribute("class"); //Find current classes
	let colorOption = classNew.replace("color ", "") //remove "color" class
	let colorSelected = document.getElementsByClassName(colorOption); //get all elements with the remaining class
	for (let i = 0; i < colorSelected.length; i++) {
	colorSelected[i].classList.remove("active"); //remove active class from all these elements
	}
	classNew = classNew + " active"; // add active to current class
	e.target.setAttribute("class", classNew); //change the colors class


	let colorOverlay = document.getElementById(pathChosen); // Find the path that will be changed
	colorOverlay.style.fill = hexNew; // Change colour of the path

	if (pathChosen === "path-bg") {
		bgTone = toneNew; 
	} else if (pathChosen === "path-1") {
		path1Tone = toneNew;
	}

	let logoPath = document.getElementById("path-logos");
	logoSrc = ("images/pro/logos" + currentDesign + bgTone + path1Tone + ".svg");
	logoPath.src = logoSrc;

	let sponsorPath = document.getElementById("path-sponsors");
	sponsorSrc = ("images/pro/sponsors" + currentDesign + bgTone + path1Tone + ".svg");
	sponsorPath.src = sponsorSrc;
}


/* Identifty which pattern button was clicked */

let pattern = document.getElementsByClassName("shirt-pattern");
	for (let i = 0; i < pattern.length; i++) {
		pattern[i].onclick = changePattern;
	}

function changePattern(e) {
	let patternNew = e.target.getAttribute("data-path-pattern"); 

	for (let i = 0; i < pattern.length; i++) {
	pattern[i].classList.remove("active"); //remove active class from all pattern elements
	}
	classNew = "shirt-pattern" + " active"; // add active to current class
	e.target.setAttribute("class", classNew); //change the patterns class

	let patternOverlay = document.getElementById("path-pattern");
	patternOverlay.setAttribute("src", patternNew);
}

/* Identifty which design button was clicked */

let design = document.getElementsByClassName("shirt-design");
	for (let i = 0; i < design.length; i++) {
		design[i].onclick = changeDesign;
	}

function changeDesign(e) {
	let path1New = e.target.getAttribute("data-path-1");
	let path2New = e.target.getAttribute("data-path-2");
	let path1SNew = e.target.getAttribute("data-path-1s");
	let path2SNew = e.target.getAttribute("data-path-2s");
	let chosenDesign = e.target.getAttribute("data-design");

	for (let i = 0; i < design.length; i++) {
	design[i].classList.remove("active"); //remove active class from all design elements
	}
	classNew = "shirt-design" + " active"; // add active to current class
	e.target.setAttribute("class", classNew); //change the designs class

	currentDesign = chosenDesign;

	let designPath1 = document.getElementById("path-1");
	let designPath2 = document.getElementById("path-2");

	if (sponsorOnOff === "off") {
		designPath1.setAttribute("d", path1New);
		designPath2.setAttribute("d", path2New);
		currentPath1 = path1New;
		backupPath1 = path1SNew;
		currentPath2 = path2New;
		backupPath2 = path2SNew;
	} else 	if (sponsorOnOff === "on") {
		designPath1.setAttribute("d", path1SNew);
		designPath2.setAttribute("d", path2SNew);
		currentPath1 = path1SNew;
		backupPath1 = path1New;
		currentPath2 = path2SNew;
		backupPath2 = path2New;
	}

	let logoPath = document.getElementById("path-logos");
	logoSrc = ("images/pro/logos" + currentDesign + bgTone + path1Tone + ".svg");
	logoPath.src = logoSrc;

	let sponsorPath = document.getElementById("path-sponsors");
	sponsorSrc = ("images/pro/sponsors" + currentDesign + bgTone + path1Tone + ".svg");
	sponsorPath.src = sponsorSrc;
}


/* Identifty which logo button was clicked */

let logos = document.getElementsByClassName("logos");
	for (let i = 0; i < logos.length; i++) {
		logos[i].onclick = changeLogos;
	}

for (let i = 0; i < logos.length; i++) {
		logosOff = logos[1];
	}

function changeLogos(e) {
	let logosToggle = e.target.getAttribute("data-logos");
	
	let logosOverlay = document.getElementById("path-logos");
	let sponsorsOverlay = document.getElementById("path-sponsors");

	for (let i = 0; i < logos.length; i++) {
	logos[i].classList.remove("active2"); //remove active class from all logo elements
	}
	classNew = "emb logos" + " active2"; // add active to current class
	e.target.setAttribute("class", classNew); //change the logos class


	if (logosToggle === "off") {
		logosOverlay.style.visibility = "hidden";
	} else if (logosToggle === "on" && sponsorOnOff === "on") {
		logosOverlay.style.visibility = "visible";
		sponsorsOverlay.style.visibility = "hidden";
		sponsorOnOff = "off";

		for (let i = 0; i < sponsors.length; i++) {
		sponsors[0].classList.remove("active2"); //remove active class from on sponsor element
		}
		sponsorsOff.classList.add("active2"); //add active class to off sponsor element

		let designPath1 = document.getElementById("path-1");
		let designPath2 = document.getElementById("path-2");

		tempPath1 = currentPath1;
		tempPath2 = currentPath2;
		currentPath1 = backupPath1;
		currentPath2 = backupPath2;
		backupPath1 = tempPath1;
		backupPath2 = tempPath2;

		designPath1.setAttribute("d", currentPath1);
		designPath2.setAttribute("d", currentPath2);
	} else if (logosToggle === "on") {
		logosOverlay.style.visibility = "visible";
		sponsorsOverlay.style.visibility = "hidden";
		sponsorOnOff = "off";
	} 
}


/* Identifty which sponsor button was clicked */

let sponsors = document.getElementsByClassName("sponsors");
	for (let i = 0; i < sponsors.length; i++) {
		sponsors[i].onclick = changeSponsors;
	}

for (let i = 0; i < sponsors.length; i++) {
		sponsorsOff = sponsors[1];
	}


function changeSponsors(e) {
	let sponsorsToggle = e.target.getAttribute("data-sponsors");
	
	let sponsorsOverlay = document.getElementById("path-sponsors");
	let logosOverlay = document.getElementById("path-logos");

	let designPath1 = document.getElementById("path-1");
	let designPath2 = document.getElementById("path-2");

	for (let i = 0; i < sponsors.length; i++) {
	sponsors[i].classList.remove("active2"); //remove active class from all sponsor elements
	}
	classNew = "emb sponsors" + " active2"; // add active to current class
	e.target.setAttribute("class", classNew); //change the sponsor class

	tempPath1 = currentPath1;
	tempPath2 = currentPath2;
	currentPath1 = backupPath1;
	currentPath2 = backupPath2;
	backupPath1 = tempPath1;
	backupPath2 = tempPath2;

	if (sponsorsToggle === "off" && sponsorOnOff === "on") {
		sponsorsOverlay.style.visibility = "hidden";
		sponsorOnOff = "off";
		designPath1.setAttribute("d", currentPath1);
		designPath2.setAttribute("d", currentPath2);
	} else if (sponsorsToggle === "on" && sponsorOnOff === "off") {
		sponsorsOverlay.style.visibility = "visible";
		logosOverlay.style.visibility = "hidden";
		sponsorOnOff = "on";
		designPath1.setAttribute("d", currentPath1);
		designPath2.setAttribute("d", currentPath2);

		for (let i = 0; i < logos.length; i++) {
		logos[0].classList.remove("active2"); //remove active class from all logo elements
		}
		logosOff.classList.add("active2"); //add active class to off sponsor element
	} 
}