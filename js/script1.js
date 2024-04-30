

var myname = document.getElementsByClassName("title_name");
var school = document.getElementsByClassName("title_school");
var degree = document.getElementsByClassName("title_degree");
var major = document.getElementsByClassName("title_major");
var section = document.getElementById("sections");
var buttons = section.getElementsByTagName("button");

for (let i = 0; i < myname.length; i++) {
	setTimeout(  () => { 
	myname[i].style.visibility = "visible"; 
	} , 500);
	setTimeout(  () => { 
 	school[i].style.visibility = "visible"; 
	} , 1000);
	setTimeout(  () => { 
	degree[i].style.visibility = "visible"; 
	} , 1500);
	setTimeout(  () => { 
	major[i].style.visibility = "visible"; 
	} , 2000);
}


// const htmlString = document.getElementById('myBlock').innerHTML;
// const parser = new DOMParser();
// const parsedHtml = parser.parseFromString(htmlString, 'text/html');
// const elementsByTagName = parsedHtml.getElementsByTagName('p');


buttons[0].style.backgroundColor = "blue";


section.addEventListener('click', function(event) {
	const current = event.target.innerHTML;
	 for (var j = 0; j < buttons.length; j++) {
           buttons[j].style.backgroundColor = ''; // Reset to default (empty)
     }
  
	if(current.indexOf("Education") != -1){
		buttons[1].style.backgroundColor = "blue";
		console.log("color = "+ buttons[1].style.backgroundColor);
		renderEd();
	}else if(current.indexOf("Resume") != -1){
		buttons[2].style.backgroundColor = "blue";
		renderRes();
	}else if(current.indexOf("Skills") != -1){
		buttons[3].style.backgroundColor = "blue";
		renderSkl();
	}else if(current.indexOf("Work") != -1){
		buttons[4].style.backgroundColor = "blue";
		//renderWrk();
	}else if(current.indexOf("Projects") != -1){
		buttons[5].style.backgroundColor = "blue";
		//renderProj();
	}else if(current.indexOf("Activity") != -1){
		buttons[6].style.backgroundColor = "blue";
		//renderAct();
	} else{
			renderHome();
			buttons[0].style.backgroundColor = "blue";

	}
		
});



// section[0].onclick = e => { 
// 	console.log("cliked");
// 	let a = e.target.innerHTML;
// 	console.log("clicked on "+a);
// }

// const buttonPressed = e => {
// 	console.log(e.target.id);  // Get ID of Clicked Element
// }


let show = document.getElementById("expansion");
show.style.backgroundImage = "url('mac.avif')";
// show.style.border = "3px solid";
// show.style.width = "85%"


let showLeft = document.createElement("div");
showLeft.className = "expansionLeft"
let showRight = document.createElement("div");
showRight.className = "expansionRight";

// let left = document.createElement("div");
// left.className = "left";

let leftTop = document.createElement("div");
leftTop.className = "left1";

let leftBottom = document.createElement("div");
leftBottom.className = "left2";

let right = document.createElement("IMG");
right.className = "right";
	
// left.appendChild(leftTop);
// left.appendChild(leftBottom);
	
function renderHome()   { 

		show.innerHTML = "";
		show.style.background = "url('mac.avif')";
		show.style.backgroundRepeat= "no-repeat";

		let display = document.createElement("p");
		display.innerHTML = "My name is Ammanuel Beyene. <br><br> I am a software engineer who is currently living in Marysville, WA. <br><br> I recently gradauted from Seattle Pacific University with a Bachelor of Science in Computer Science and a GPA of 3.56. <br><br> I am now looking for part time or full time software engineering realted internship and/or job. <br><br> I have taken several courses, worked on several projects, and learned several topics by myself.";
		
		display.style.color = "white";
		display.style.fontSize= "120%";
		display.style.textAlign = "center";
// 		display.style.justifyContent = "center";
		show.appendChild(display);



// 		let picleft = document.createElement("IMG");
// 		picleft.className = "picleft";

// 		picleft.setAttribute("src", "trees.jpeg");
// 		showLeft.appendChild(picleft);
// 		picleft.setAttribute("alt", "grad pic");
// 		picleft.setAttribute("width", "auto");
// 		picleft.setAttribute("height", "auto");
//  	picleft.style.backgroundSize = "cover";
// 		picleft.style.padding = "10%";

// 		let picright = document.createElement("IMG");
// 		picright.className = "picright";
// 		picright.setAttribute("src", "profile.jpeg");
// 		showRight.appendChild(picright);
// 		picright.setAttribute("alt", "grad pic");
// 		picright.setAttribute("width", "auto");
// 		picright.setAttribute("height", "auto");
// 		picright.style.backgroundSize = "cover";
// 		picright.style.padding = "10%";		
		
// 		show2.style.background = "url('ed.jpg')";
// 		let x = document.createElement("video");
//	 	x.setAttribute("id", "gradvid");
// 		x.setAttribute("width", "auto");
// 		x.setAttribute("height", "auto");
// 		x.autoplay = true;
// 		x.loop = true;
// 		x.setAttribute("src", "gradvid.mp4");
// 		x.setAttribute("type", "video/mp4");

// 		show.appendChild(x);
// 	 	<video id="bgVideo" controls preload="true" autoplay loop muted>
//      <source src="Home_Page.mp4" type="video/mp4" /> 
//      <source src="Home_Page.ogv" type="video/ogv" />    
//      <source src="Home_Page.webm" type="video/webm" /> 

}

	
function renderEd(){
	
	show.innerHTML = "";

	showLeft.innerHTML = "";
	showRight.innerHTML = "";
	show.style.background = "url('ed2copy.png')";
	show.style.backgroundRepeat= "no-repeat";
	show.style.backgroundSize = "cover";
	
	leftTop.innerHTML = "Seattle Pacific University (2021 - 2023) <br> Bachelor of Science in Computer Science <br> GPA: 3.56 <br> SPU Developers Club President <br> <br>";
	
	let buttonT1 = document.createElement("button");
	buttonT1.innerHTML = "Transcript";
	
	leftBottom.innerHTML	= "Everett Community College (2020 - 2021) <br> Associate of Science Transfer <br> GPA: 3.86<br><br>";
	
	let buttonT2 = document.createElement("button");
	buttonT2.innerHTML = "Transcript";
	
	
	buttonT1.className = "buttonT";
	buttonT2.className = "buttonT";
	
	
	showLeft.appendChild(leftTop);
	showLeft.appendChild(leftBottom);
	
	leftTop.appendChild(buttonT1);
	leftBottom.appendChild(buttonT2);

	
	let pdfT = document.createElement("embed");
	pdfT.setAttribute("id", "pdfembed");
	pdfT.setAttribute("type", "application/pdf");
	pdfT.className = "pdfT";
	
	// later add same fucntion for on click *******
	leftTop.onmouseenter = function() { 
			edtophover();
			console.log("called hover function 1");
// 			console.log("tagname = "+showRight.childNodes[0].tagName);
// 			right.setAttribute("src", "falcon4.jpeg");
// 			if(showRight.childNodes.length === 0 || 	showRight.childNodes[0].tagName === "IMG" ){
// 					right.setAttribute("width", "100%");
// 					right.setAttribute("height", "100%");
// 					showRight.appendChild(right);
// 			}
	}	
	
	
	
	
	// later add same fucntion for on click *******
	leftBottom.onmouseenter = function() { 
			edbottomhover();
						console.log("called hover function 2");

// 			console.log("length = "+showRight.childNodes.length);
// 			console.log("tagname = "+showRight.childNodes[0].tagName);
// 			right.setAttribute("src", "trojan.jpg");
// 			if(showRight.childNodes.length === 0 || showRight.childNodes[0].tagName === "IMG" ){
// 					right.setAttribute("width", "100%");
// 					right.setAttribute("height", "100%");
// 					showRight.appendChild(right);
// 			}
	}
	
	
	buttonT1.onclick = function(){
		edtopclick();
					console.log("called click function 1");

// 		clickcount++;
// 		console.log("clockcount = "+clickcount);
// 		if(clickcount < 2){
// 				right.remove();
// 				pdfT.setAttribute("src", "EVCCT.pdf");
// 				pdfT.setAttribute("width", "100%");
// 				pdfT.setAttribute("height", "100%");
// 				showRight.appendChild(pdfT);
// 		}else{
// 			showRight.innerHTML = "";
// 		}
	}
	
	buttonT2.onclick = function(){
			edbottomclick();
						console.log("called click function 2");

// 		clickcount++;
// 		console.log("clockcount = "+clickcount);
// 		if(clickcount < 2){
// 				right.remove();
// 				pdfT.setAttribute("src", "SPUT.pdf");
// 				pdfT.setAttribute("width", "100%");
// 				pdfT.setAttribute("height", "100%");
// 				showRight.appendChild(pdfT);
// 		}else{
// 			showRight.innerHTML = "";
// 		}
	}
	
	
	function edtophover(){
			console.log("length 1 = "+showRight.childNodes.length);
			
			right.setAttribute("src", "falcon4.jpeg");
			if(showRight.childNodes.length === 0 || 	showRight.childNodes[0].tagName === "IMG" ){
					right.setAttribute("width", "100%");
					right.setAttribute("height", "100%");
					showRight.appendChild(right);
			} 
	}
	
	function edbottomhover(){
			console.log("length 2 = "+showRight.childNodes.length);
			
			right.setAttribute("src", "trojan.jpg");
			if(showRight.childNodes.length === 0 || showRight.childNodes[0].tagName === "IMG" ){
					right.setAttribute("width", "100%");
					right.setAttribute("height", "100%");
					showRight.appendChild(right);
			}
	}
	
	let clickcount = 0;
	function edtopclick(){
			clickcount++;
			console.log("clockcount = "+clickcount);
			if(clickcount < 2){
					right.remove();
					pdfT.setAttribute("src", "SPUT.pdf");
					pdfT.setAttribute("width", "100%");
					pdfT.setAttribute("height", "100%");
					showRight.appendChild(pdfT);
			}else{
					showRight.innerHTML = "";
					clickcount = 0;
			}
	}
	
	let clickcount1 = 0;
	function edbottomclick(){
		clickcount1++;
		console.log("clickcount1 = "+clickcount1);
		if(clickcount1 < 2){
				right.remove();
				pdfT.setAttribute("src", "EVCCT.pdf");
				pdfT.setAttribute("width", "100%");
				pdfT.setAttribute("height", "100%");
				showRight.appendChild(pdfT);
		}else{
			showRight.innerHTML = "";
			clickcount1 = 0;
		}
	}
	
	
	show.appendChild(showLeft);
	show.appendChild(showRight);
	
	
}






function renderRes(){

	show.innerHTML = "";
	showLeft.innerHTML = "";
	showRight.innerHTML = "";
	
	show.style.background = "url('res.avif')";

	let Restitle = document.createElement("p");
	let Restitle2 = document.createElement("p");
	
	Restitle.className = "Restitle";
	Restitle2.className = "Restitle2";
	
	Restitle.innerHTML = "Job/Internship Resume";
	Restitle2.innerHTML = "Work Resume";

	let res1 = document.createElement("embed");
	res1.setAttribute("id", "pdfembed");
	res1.setAttribute("width", "80%");
	res1.setAttribute("height", "80%");
	res1.setAttribute("type", "application/pdf");
	res1.setAttribute("src", "ABRes.pdf");
	res1.style.padding = "10%";


	showLeft.appendChild(Restitle);
	showLeft.appendChild(res1);
	
	let res2 = document.createElement("embed");
	res2.setAttribute("id", "pdfembed");
	res2.setAttribute("width", "80%");
	res2.setAttribute("height", "80%");
	res2.setAttribute("type", "application/pdf");
	res2.setAttribute("src", "ABRes2.pdf");
	res2.style.padding = "10%";
	
	

	showRight.appendChild(Restitle2);
	showRight.appendChild(res2);
	
	show.appendChild(showLeft);
	show.appendChild(showRight);
	
// 	for(let i = 0; i<show.childNodes.length; i++){
// 		console.log("dom = "+show.childNodes[i]);
// 		for(let j = 0; j<show.childNodes[i].childNodes.length; j++){
// 			console.log("dom 1 = "+show.childNodes[i].childNodes[j]);
// 			for(let k = 0; k<show.childNodes[i].childNodes[j].childNodes.length; k++){
// 				console.log("dom 2 = "+show.childNodes[i].childNodes[j].childNodes[k]);
// 			}
// 		}
// 	}
	
	
}






function renderSkl(){
	
	show.innerHTML = "";
	showLeft.innerHTML = "";
	showRight.innerHTML = "";
	
	show.appendChild(showLeft);
	show.appendChild(showRight);
	showLeft.style.background = "url('skl.png')";
	showLeft.style.backgroundSize = "cover";
	
	showRight.style.background = "url('black.jpg')";
	showRight.style.backgroundSize = "cover";
	
	
	
	let skills = document.createElement("div");
	skills.className = "skills";
	let b1 = document.createElement("button");
	b1.innerHTML = "Programming";
	
	let list1 = document.createElement("div");
	list1.className = "list1";
	
	let l1 = document.createElement("li");
	l1.textcontent = "Java"
	let l2 = document.createElement("li");
	l2.textcontent = "Python"
	let l3 = document.createElement("li");
	l3.textcontent = "C++"
	let l4 = document.createElement("li");
	l4.textcontent = "C#"
	let l5 = document.createElement("li");
	l5.textcontent = "Prolog"
	let l6 = document.createElement("li");
	l6.textcontent = "Scheme"
	let l7 = document.createElement("li");
	l7.textcontent = "Rust"
	let l8 = document.createElement("li");
	l8.textcontent = "Go"
	let l9 = document.createElement("li");

	b1.append(list1);
	list1.style.visibility = "hidden";
	
	
	
	let b2 = document.createElement("button");
	b2.innerHTML = "Database programming";
	
	let list2 = document.createElement("div");
	list2.className = "list2";
	
	l1.textcontent = "SQL"
	l2.textcontent = "MySQL"
	l3.textcontent = "SQLite studio"
	l4.textcontent = "MongoDB"
	
	b2.append(list2);
	list2.style.visibility = "hidden";
	
	
	
	let b3 = document.createElement("button");
	b3.innerHTML = "Data Structures";
	
	let list3 = document.createElement("div");
	list3.className = "list3";
	
	l1.textcontent = "Arrays"
	l2.textcontent = "List"
	l3.textcontent = "Set"
	l4.textcontent = "Queue"
	l5.textcontent = "Map"
	l6.textcontent = "Hash"
	l7.textcontent = "Tree"

	b3.append(list3);
	list3.style.visibility = "hidden";
	
	
	let b4 = document.createElement("button");
	b4.innerHTML = "Algorithms";
	let list4 = document.createElement("div");
	list4.className = "list4";

	
	l1.textcontent = "Sorting"
	l2.textcontent = "Searching"
	l3.textcontent = "Graph"
	l4.textcontent = "Divide and conquer"
	l5.textcontent = "Greedy"
	l6.textcontent = "Dynamic programming"
	l7.textcontent = "Backtracking"
	
	b4.append(list4);
	list4.style.visibility = "hidden";
	
	
	
	
	let b5 = document.createElement("button");
	b5.innerHTML = "Software Development";
	
	let list5 = document.createElement("div");
	list5.className = "list5";

	l1.textcontent = "Software Development Life Cycle";
	l2.textcontent = "Agile";
	l3.textcontent = "System proposal";
	l4.textcontent = "System specification";
	l5.textcontent = "Data gathering ";
	l6.textcontent = "Planning and analysis";
	l7.textcontent = "Design";
	l8.textcontent = "Implementation and testing";
	l9.textcontent = "Support and evolution";
	
	b5.append(list5);
	list5.style.visibility = "hidden";
	
	
	let b6 = document.createElement("button");
	b6.innerHTML = "Web Development";
	let list6 = document.createElement("div");
	list6.className = "list6";

	l1.textcontent = "HTML";
	l2.textcontent = "CSS";
	l3.textcontent = "JavaScript";
	l4.textcontent = "Node.Js";
	l5.textcontent = "React ";
	l6.textcontent = "PHP";
	l7.textcontent = "Django";

	b6.append(list6);
	list6.style.visibility = "hidden";
	
	
	let b7 = document.createElement("button");
	b7.innerHTML = "UI Design";
	let list7 = document.createElement("div");
	list7.className = "list7";
	b7.append(list7);
	list7.style.visibility = "hidden";
	
	
	let b8 = document.createElement("button");
	b8.innerHTML = "UX Design";
	let list8 = document.createElement("div");
	list8.className = "list8";
	b8.append(list8);
	list8.style.visibility = "hidden";
	
	
	
	let b9 = document.createElement("button");
	b9.innerHTML = "Design patterns";
	let list9 = document.createElement("div");
	list9.className = "list9";
	b9.append(list9);
	list9.style.visibility = "hidden";
	
	
	let b10 = document.createElement("button");
	b10.innerHTML = "Version control";
	let list10 = document.createElement("div");
	list10.className = "list10";
	l1.textcontent = "Git";
	b10.append(list10);
	list10.style.visibility = "hidden";
	
	
	let b11= document.createElement("button");
	b11.innerHTML = "Containers";
	let list11 = document.createElement("div");
	list11.className = "list11";
	l1.textcontent = "Docker";
	l1.textcontent = "Kubernetes";
	b11.append(list11);
	list11.style.visibility = "hidden";
	
	
	let b12 = document.createElement("button");
	b12.innerHTML = "Academic/Technical Writing";
	let list12 = document.createElement("div");
	list12.className = "list12";
	b12.append(list12);
	list12.style.visibility = "hidden";
	
	let b13 = document.createElement("button");
	b13.innerHTML = "Game Development";
	let list13 = document.createElement("div");
	list13.className = "list13";
	l1.textcontent = "Unity";
	l1.textcontent = "Blender";
	b13.append(list13);
	list13.style.visibility = "hidden";
	
	
	let b14 = document.createElement("button");
	b14.innerHTML = "Operating System";
	let list14 = document.createElement("div");
	list14.className = "list14";
	b14.append(list14);
	list14.style.visibility = "hidden";
	
	let b15 = document.createElement("button");
	b15.innerHTML = "Networking";
	let list15 = document.createElement("div");
	list15.className = "list15";
	b15.append(list15);
	list15.style.visibility = "hidden";
	
	let b16 = document.createElement("button");
	b16.innerHTML = "Computer Architecture";
	let list16 = document.createElement("div");
	list16.className = "list16";
	b16.append(list16);
	list16.style.visibility = "hidden";
	
	showLeft.append(skills);
	
	
	skills.append(b1);
	skills.append(b2);
	skills.append(b3);
	skills.append(b4);
	skills.append(b5);
	skills.append(b6);
	skills.append(b7);
	skills.append(b8);
	skills.append(b9);
	skills.append(b10);
	skills.append(b11);
	skills.append(b12);
	skills.append(b13);
	skills.append(b14);
	skills.append(b15);
	skills.append(b16);
	
	
	
	
	
}































