let initialDesign = "rugby0";
let sponsorStatus = "sponsor-off";
let oxenCenter =  document.getElementById("path-oxen-central").getAttribute("d");
let oxenLeft =  document.getElementById("path-oxen-left").getAttribute("d");

/* Identifty which color button was clicked */

let color = document.getElementsByClassName("color");
	for (let i = 0; i < color.length; i++) {
		color[i].onclick = changeColor;
	}

/* Get hex value and identify the correct path for color button pressed and change the fill color*/

function changeColor(e) {
	let hex = e.target.getAttribute("data-hex"); // Find data-hex (colour) value for the colour selected
	let path = e.target.getAttribute("data-path"); // Find which path to change colour of for the colour selected

	let overlay = document.getElementById(path); // Find the path that will be changed
	overlay.style.fill = hex; // Change colour of the path

	let dull = e.target.getAttribute("dull-hex"); // Find dull-hex (dull colour) value for the colour selected
	let overlayDull = document.getElementById("path-B"); // Find which path to change dull colour of for the colour selected

	if (dull != "none") // If dull value is none dont' do anything to dull value
	overlayDull.style.fill = dull; // If dull isn't none change the relevant payth to the new dull hex
}

/* Identifty which design button was clicked */

let design = document.getElementsByClassName("shirt-design");
	for (let i = 0; i < design.length; i++) {
		design[i].onclick = changeDesign;
	}

/* Get path value and update*/


function changeDesign(e) {
	let pathOne = e.target.getAttribute("data-path-1");
	let pathTwo = e.target.getAttribute("data-path-2");
	let pathThree = e.target.getAttribute("data-path-3");
	let pathA = e.target.getAttribute("data-path-A");
	let pathB = e.target.getAttribute("data-path-B");
	let pathOxen = e.target.getAttribute("data-path-oxen");
	let designOne = document.getElementById("path-1");
	let designTwo = document.getElementById("path-2");
	let designThree = document.getElementById("path-3");
	let designA = document.getElementById("path-A");
	let designB = document.getElementById("path-B");
	let designOxen = document.getElementById("path-oxen");


	designOne.setAttribute("d", pathOne);
	designTwo.setAttribute("d", pathTwo);
	designThree.setAttribute("d", pathThree);
	designA.setAttribute("d", pathA);
	designB.setAttribute("d", pathB);
	designOxen.setAttribute("d", pathOxen);

	let dataDesign = e.target.getAttribute("data-design");
	initialDesign = dataDesign;

	if (initialDesign === "rugby3" && sponsorStatus === "sponsor-on") {
		designOxen.setAttribute("d", oxenCenter);
	} else {
		designOxen.setAttribute("d", pathOxen);
	}

}


/* Identifty which logo on/off button was clicked */

let embOnOff = document.getElementsByClassName("emb");
	for (let i = 0; i < embOnOff.length; i++) {
		embOnOff[i].onclick = changeEmb;
	}


/* Change visibility of logo */


function changeEmb(e) {

	let path = e.target.getAttribute("data-path");
	let embLogo = document.getElementById(path);
	let embToggle = e.target.getAttribute("data-toggle");
	let designOxen = document.getElementById("path-oxen");


	if (embToggle === "off") {
		embLogo.style.visibility = "hidden";
	} else if (embToggle === "sponsor-off" && initialDesign === "rugby3") {
		sponsorStatus = embToggle;
		designOxen.setAttribute("d", oxenLeft);
		embLogo.style.visibility = "hidden";
	} else if (embToggle === "sponsor-off") {
		sponsorStatus = embToggle;
		embLogo.style.visibility = "hidden";
	} else if (embToggle === "sponsor-on"  && initialDesign === "rugby3") {
		sponsorStatus = embToggle;
		designOxen.setAttribute("d", oxenCenter);
		embLogo.style.visibility = "visible";
	} else if (embToggle === "sponsor-on"  && initialDesign) {
		sponsorStatus = embToggle;
		embLogo.style.visibility = "visible";
	} else {
		embLogo.style.visibility = "visible";
	}

	console.log(sponsorStatus);

	}

/* Identifty which logo avriation button was clicked */

let embVariation = document.getElementsByClassName("option");
	for (let i = 0; i < embVariation.length; i++) {
		embVariation[i].onclick = changeVariation;
	}


/* Change visibility of logo */


function changeVariation(e) {

	let path = e.target.getAttribute("data-path");
	let embLogo = document.getElementById(path);
	let embSrc = e.target.getAttribute("data-src");

	embLogo.setAttribute("src", embSrc);
}


/*
let design = document.getElementsByClassName("shirt-design");
	for (let i = 0; i < design.length; i++) {
		design[i].onclick = changeDesign;
	}


function changeDesign(e) {
	let designChoice = e.target.getAttribute("data-design");
	let overlay2 = document.getElementById(designChoice);

	overlay2.style.display = "block";
	console.log(overlay2);
}*/


