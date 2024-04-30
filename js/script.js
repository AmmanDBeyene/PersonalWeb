
var myname = document.getElementsByClassName("title_name");
var degree = document.getElementsByClassName("title_degree");
var major = document.getElementsByClassName("title_major");
var section = document.getElementById("sections");
var buttons = section.getElementsByTagName("button");

for (let i = 0; i < myname.length; i++) {
	setTimeout(  () => { 
	myname[i].style.visibility = "visible"; 
	} , 500);
	setTimeout(  () => { 
	degree[i].style.visibility = "visible"; 
	} , 1500);
	setTimeout(  () => { 
	major[i].style.visibility = "visible"; 
	} , 2000);
}


let show = document.getElementById("expansion");
show.style.backgroundImage = "url('assets/pics/mac.avif')";


let showLeft = document.createElement("div");
showLeft.className = "expansionLeft"
let showRight = document.createElement("div");
showRight.className = "expansionRight";
let showR = document.createElement("div");
showR.className = "showr";


let leftTop = document.createElement("div");
leftTop.className = "left1";

let leftBottom = document.createElement("div");
leftBottom.className = "left2";

let right = document.createElement("IMG");
right.className = "right";


document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored value from localStorage

 projectOpen = localStorage.getItem('projectOpen');
 
  console.log("projectOpen 1 = "+projectOpen);


	if (projectOpen === "true"){
	  	console.log("inside if 1");
  		console.log("projectOpen 1 = "+projectOpen);
		buttons[5].style.backgroundColor = "blue";
		show.innerHTML = "";
     	show.style = "";
		showLeft.innerHTML = "";
		showLeft.style = "";
		showRight.innerHTML = "";
		showRight.style = "";
		showR.innerHTML = "";
		showR.style = "";
		renderProj()
    	localStorage.setItem('projectOpen', 'false');
	}else{
		buttons[0].style.backgroundColor = "blue";
		renderHome();
	}


 });




//localStorage.setItem('projectOpen', 'false');
//
//
////console.log("projectOpen 2 = "+projectOpen);
//
//// Or, from localStorage
// projectOpen = localStorage.getItem('projectOpen');
// 
// 
// console.log("projectOpen 3 = "+projectOpen);



// Saving data to sessionStorage
//sessionStorage.setItem('projectOpen', 'myValue');

// Or, for data that needs to persist across sessions:






section.addEventListener('click', function(event) {
		const current = event.target.innerHTML;
		 for (var j = 0; j < buttons.length; j++) {
	           buttons[j].style.backgroundColor = ''; // Reset to default (empty)
	     }
     
     
     	show.innerHTML = "";
     	show.style = "";
		showLeft.innerHTML = "";
		showLeft.style = "";
		showRight.innerHTML = "";
		showRight.style = "";
		showR.innerHTML = "";
		showR.style = "";
	
        
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
			renderWrk();
		}else if(current.indexOf("Projects") != -1){
			console.log("not clicked");
			buttons[5].style.backgroundColor = "blue";
			renderProj();
		}else if(current.indexOf("Activity/Hobbies") != -1){
			console.log("clicked");
			buttons[6].style.backgroundColor = "blue";
			renderAct();
		} else{
				renderHome();
				buttons[0].style.backgroundColor = "blue";
	
		}
		
});


	
function renderHome()   { 
		
			
		show.style.background = "url('assets/pics/mac.avif')";
		show.style.backgroundRepeat= "no-repeat";
		show.style.backgroundSize = "cover";

		let display = document.createElement("p");
		display.innerHTML = "My name is Ammanuel Beyene. <br><br> I am a software engineer who is currently living in Marysville, WA. <br><br> I recently gradauted from Seattle Pacific University with a Bachelor of Science in Computer Science and a GPA of 3.56. <br><br> I am now looking for part time or full time software engineering realted internship and/or job. <br><br> I have taken several courses, worked on several projects, and learned several topics by myself.";
		
		display.style.color = "white";
		display.style.fontSize= "120%";
		display.style.textAlign = "center";
		show.style.justifyContent = "center";
		show.appendChild(display);
		


}

	
function renderEd(){

	
	show.style.background = "url('assets/pics/ed2copy.png')";
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
	
	leftTop.onmouseenter = function() { 
			edtophover();
			console.log("called hover function 1");
	}	
	
	
	leftBottom.onmouseenter = function() { 
			edbottomhover();
			console.log("called hover function 2");
	}
	
	
	buttonT1.onclick = function(){
		edtopclick();
		console.log("called click function 1");
	}
	
	buttonT2.onclick = function(){
			edbottomclick();
			console.log("called click function 2");
	}
	
	
function edtophover(){
			console.log("length 1 = "+showRight.childNodes.length);
			right.setAttribute("src", "assets/pics/falcon4.jpeg");
			if(showRight.childNodes.length === 0 || 	showRight.childNodes[0].tagName === "IMG" ){
					right.setAttribute("width", "100%");
					right.setAttribute("height", "100%");
					showRight.appendChild(right);
			} 
	}
	

function edbottomhover(){
			console.log("length 2 = "+showRight.childNodes.length);
			
			right.setAttribute("src", "assets/pics/trojan.jpg");
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
					pdfT.setAttribute("src", "assets/pdf_files/SPUT.pdf");
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
				pdfT.setAttribute("src", "assets/pdf_files/EVCCT.pdf");
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


	show.style.background = "url('assets/pics/res.avif')";

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
	res1.setAttribute("src", "assets/pdf_files/ABRes.pdf");
	res1.style.padding = "10%";


	showLeft.appendChild(Restitle);
	showLeft.appendChild(res1);
	
	let res2 = document.createElement("embed");
	res2.setAttribute("id", "pdfembed");
	res2.setAttribute("width", "80%");
	res2.setAttribute("height", "80%");
	res2.setAttribute("type", "application/pdf");
	res2.setAttribute("src", "assets/pdf_files/ABRes2.pdf");
	res2.style.padding = "10%";
	
	

	showRight.appendChild(Restitle2);
	showRight.appendChild(res2);
	
	show.appendChild(showLeft);
	show.appendChild(showRight);

	
}




function renderSkl(){
	
	
	show.style.background = "url('assets/pics/skill6.avif')";
	show.style.backgroundRepeat = "no-repeat";
	show.style.backgroundSize = "cover";

	
	let skills = document.createElement("div");
	skills.className = "skills";
	let b1 = document.createElement("button");
	b1.innerHTML = "Programming";
	b1.className = "b1";
	
	let list1 = document.createElement("p");
	list1.className = "list1";
	
	list1.innerHTML = "Java, Python, C++, C#, Prolog, Scheme, Rust, Go,...";
	
	b1.appendChild(list1);

	list1.style.visibility = "hidden";
	list1.style.display = "none";
	
	
	let b2 = document.createElement("button");
	b2.innerHTML = "Database programming";
	b2.className = "b2";
	
	let list2 = document.createElement("p");
	list2.className = "list2";
	list2.innerHTML = "SQL, MySQL, SQLite, MongoDB,...";
	
	b2.appendChild(list2);
	list2.style.visibility = "hidden";
	list2.style.display = "none";
	
	
	let b3 = document.createElement("button");
	b3.innerHTML = "Data Structures";
	b3.className = "b3";
	
	let list3 = document.createElement("p");
	list3.className = "list3";
	list3.innerHTML = "Arrays, List, Set, Queue, Map, Hash, Tree,...";

	b3.appendChild(list3);
	list3.style.visibility = "hidden";
	list3.style.display = "none";
	
	
	let b4 = document.createElement("button");
	b4.innerHTML = "Algorithms";
	b4.className = "b4";
	let list4 = document.createElement("p");
	list4.className = "list4";
	list4.innerHTML = "Sorting, Searching, Graph, Divide and conquer, Greedy, Dynamic programming, Backtracking,....";
	
	
	b4.appendChild(list4);
	list4.style.visibility = "hidden";
	list4.style.display = "none";
	
	let b5 = document.createElement("button");
	b5.innerHTML = "Software Development";
	b5.className = "b5";
	
	let list5 = document.createElement("P");
	list5.className = "list5";
	list5.innerHTML = "Software Development Life Cycle, Agile, System proposal, System specification, Data gathering, Planning and analysis, Design, Implementation and testing, Support and evolution,...";
	
	b5.appendChild(list5);
	list5.style.visibility = "hidden";
	list5.style.display = "none";
	
	let b6 = document.createElement("button");
	b6.innerHTML = "Web Development";
	b6.className = "b6";
	let list6 = document.createElement("p");
	list6.className = "list6";
	list6.innerHTML = "HTML, CSS, JavaScript, Node.js, React, PHP, Django,...";

	b6.appendChild(list6);
	list6.style.visibility = "hidden";
	list6.style.display = "none";
	
	let b7 = document.createElement("button");
	b7.innerHTML = "UI Design";
	b7.className = "b7";
	let list7 = document.createElement("p");
	list7.className = "list7";
	b7.appendChild(list7);
	
	list7.style.visibility = "hidden";
	list7.style.display = "none";
	
	let b8 = document.createElement("button");
	b8.innerHTML = "UX Design";
	b8.className = "b8";
	let list8 = document.createElement("p");
	list8.className = "list8";
	b8.appendChild(list8);
	
	list8.style.visibility = "hidden";
	list8.style.display = "none";
	
	let b9 = document.createElement("button");
	b9.innerHTML = "Design patterns";
	b9.className = "b9";
	let list9 = document.createElement("p");
	list9.className = "list9";
	b9.appendChild(list9);
	
	list9.style.visibility = "hidden";
	list9.style.display = "none";
	
	let b10 = document.createElement("button");
	b10.innerHTML = "Version control";
	b10.className = "b10";
	let list10 = document.createElement("p");
	list10.className = "list10";
	list10.innerHTML = "Git,... ";
	b10.appendChild(list10);
	
	list10.style.visibility = "hidden";
	list10.style.display = "none";
	
	let b11= document.createElement("button");
	b11.innerHTML = "Containers";
	b11.className = "b11";
	let list11 = document.createElement("p");
	list11.className = "list11";
	list11.innerHTML = "Kubernetes, Docker,...";
	b11.appendChild(list11);
	
	list11.style.visibility = "hidden";
	list11.style.display = "none";
	
	let b12 = document.createElement("button");
	b12.innerHTML = "Academic/Technical Writing";
	b12.className = "b12";
	let list12 = document.createElement("p");
	list12.className = "list12";
	b12.appendChild(list12);
	
	list12.style.visibility = "hidden";
	list12.style.display = "none";
	
	let b13 = document.createElement("button");
	b13.innerHTML = "Game Development";
	b13.className = "b13";
	let list13 = document.createElement("p");
	list13.className = "list13";
	list13.innerHTML = "Unity, Blender, Aseprite, Visual Studio, Paint.net,...";
	
	b13.appendChild(list13);
	
	list13.style.visibility = "hidden";
	list13.style.display = "none";
	
	let b14 = document.createElement("button");
	b14.innerHTML = "Operating System";
	b14.className = "b14";
	let list14 = document.createElement("p");
	list14.className = "list14";
	b14.appendChild(list14);
	
	list14.style.visibility = "hidden";
	list14.style.display = "none";
	
	
	let b15 = document.createElement("button");
	b15.innerHTML = "Networking";
	b15.className = "b15";
	let list15 = document.createElement("p");
	list15.className = "list15";
	b15.appendChild(list15);
	
	list15.style.visibility = "hidden";
	list15.style.display = "none";
	
	let b16 = document.createElement("button");
	b16.innerHTML = "Computer Architecture";
	b16.className = "b16";
	let list16 = document.createElement("p");
	list16.className = "list16";
	b16.appendChild(list16);
	
	list16.style.visibility = "hidden";
	list16.style.display = "none";
	
	
	skills.appendChild(b1);
	skills.appendChild(b2);
	skills.appendChild(b3);
	skills.appendChild(b4);
	skills.appendChild(b5);
	skills.appendChild(b6);
	skills.appendChild(b7);
	skills.appendChild(b8);
	skills.appendChild(b9);
	skills.appendChild(b10);
	skills.appendChild(b11);
	skills.appendChild(b12);
	skills.appendChild(b13);
	skills.appendChild(b14);
	skills.appendChild(b15);
	skills.appendChild(b16);
	show.appendChild(showLeft);
	

	show.appendChild(showR);
	
	showLeft.appendChild(skills);
	
	showLeft.style.margin= "5%";
	const parentElement = document.querySelector(".skills");
	const specificTagElements = parentElement.querySelectorAll("button"); 
	showR.style.margin = "10%";

	specificTagElements.forEach(button => { button.addEventListener("click", function(e) {
		console.log("first child = "+button.childNodes[1]);
		let p = document.getElement
		showR.innerHTML = (button.childNodes[1].textContent);
		showR.style.display = "flex";
		showR.style.flexDirection = "column";
		showR.style.color = "red";
		showR.style.border ="5px solid blue";
		showR.style.height = "40%";

	})	});
	

	
}



function renderWrk(){
	
	show.style.background = "url('assets/pics/skill8.avif')";
	
	let wrk = document.createElement("div");
	wrk.className = "wrk";
	
	let b1 = document.createElement("button");
	b1.innerHTML = "It Internship";
	let p1 = document.createElement("p");
	p1.innerHTML = "IT Administrator Remote Internship @ Holy Lamb Organics| Oakville, WA <br><br> - Work as technical support and administrator <br><br> - Manage companies Google Workspace and Microsoft Exchange Outlook platforms. <br><br> - Manage company’s online operations through (MS Exchange, Shopify, Google Workspace, etc) <br><br> - Migrated all employees’ data and emails from outlook server to google workspace server by creating MX records and using GWWMO.<br><br> - Fix any online issues as necessary.";
								
	b1.appendChild(p1);
	p1.style.display = "none";
	p1.style.visibility = "hidden";
	
	let b2 = document.createElement("button");
	b2.innerHTML = "Personal Projects";
	let p2 = document.createElement("p");
	p2.innerHTML = "Tic Tac Toe Game <br> Personal Website";
	b2.appendChild(p2);
	p2.style.display = "none";
	p2.style.visibility = "hidden";
	
	
	let b3 = document.createElement("button");
	b3.innerHTML = "School Projects";
	let p3 = document.createElement("p");
	p3.innerHTML = "- Task Manager <br><br> - Pong Game <br> - Quotation Application <br><br> - Eon's End <br><br> - Battleship Game <br><br> - DMP System Design";
	b3.appendChild(p3);
	p3.style.display = "none";
	p3.style.visibility = "hidden";
	
	
	let b4 = document.createElement("button");
	b4.innerHTML = "SPUD Club Leadership";
	let p4 = document.createElement("p");
	p4.innerHTML = "SPU Developers Club President (SPUD) @ Seattle, WA (2022 - 2023) <br><br> - Hosted events catered towards members interests and officers’ choice of helpful topics <br><br> - Initiated and led projects for a computer lab room remodeling and building SPUD website. <br><br> - Reorganized a falling club, strengthened its foundations, and set it up for future success. ";
	b4.appendChild(p4);
	p4.style.display = "none";
	p4.style.visibility = "hidden";
	
	
	let b5 = document.createElement("button");
	b5.innerHTML = "Minimum Wage Jobs";
	let p5 = document.createElement("p");
	p5.innerHTML = "@ Red Robin Everett (April 2021 – March 2021) & Jimmy Johns Aurora  (October 2017 - April 2018) <br> & Ceres Roasting Company (August 2015 – August 2016)  <br><br> Tasks Included: <br><br> - Prepared sandwiches, work as cashier, prepare and refill veggies, meats, cups, lids, napkins…etc.   <br><br> - Cleaned tables, chairs, food area, and floor. <br><br> - At Jimmy John’s - Worked as a shift leader from January 2018 - April 2018  <br><br> - While working at Ceres, worked at Century Link and Key Arena during events and games.";
	b5.appendChild(p5);
	p5.style.display = "none";
	p5.style.visibility = "hidden";
	
	
	let b6 = document.createElement("button");
	b6.innerHTML = "Work Study Jobs";
	let p6 = document.createElement("p");
	p6.innerHTML = "Faculty Office Assistant @ North Seattle Community College (January 2019 – December 2019)  <br> & Psychology Lab Assistant @ Western Washington University  (October 2013 – June 2014)  <br><br> Tasks Included:  <br><br> - @ North Seattle - Assist other instructors with side work, as requested  <br><br> - @ Western – Participate in meetings and give inputs as well as perform test procedures on participant  <br><br> - Greet customers, answer phone calls, and assist with walk in questions.   <br><br> - Deliver faculty mails to their box and fill out printer papers according to color and length of paper. ";
								
	b6.appendChild(p6);
	p6.style.display = "none";
	p6.style.visibility = "hidden";
	
	
	let b7 = document.createElement("button");
	b7.innerHTML = "Church Community Service";
	let p7 = document.createElement("p");
	p7.innerHTML = "@ Oromo Evangelical Church of Seattle ( Seattle, WA  ) (2011 – present)  <br><br> - Usher & Sunday School Teacher  <br><br> - Set up and take down electronics, keyboards, and others before and after service.  <br><br> - Teach bible to kids from the age of 7 to 9 on Sundays.";
	b7.appendChild(p7);
	p7.style.display = "none";
	p7.style.visibility = "hidden";
	
	
	wrk.appendChild(b1);
	wrk.appendChild(b2);
	wrk.appendChild(b3);
	wrk.appendChild(b4);
	wrk.appendChild(b5);
	wrk.appendChild(b6);
	wrk.appendChild(b7);
	
	show.appendChild(wrk);
	
	const parentElement = document.querySelector(".wrk");
	const specificTagElements = parentElement.querySelectorAll("button"); 
	
	
	specificTagElements.forEach(button => {button.addEventListener("click", function(e) {
			showRight.innerHTML = "";
			
			let p = document.createElement("p");
			p.innerHTML = button.childNodes[1].innerHTML;
			
			showRight.appendChild(p);
			show.appendChild(showRight);
			showRight.style.color = "white";
			showRight.style.border = "3px solid blue";
			showRight.style.margin = "10%";
			showRight.style.padding = "0%";
			
		})
	});






}


function renderProj(){

		show.style.backgroundImage = "url('assets/pics/mac.avif')";

	
		let proj = document.createElement("div");
		proj.className = "proj";
		
		
		let p1 = document.createElement("button");
		p1.innerHTML = "2D BattleshipGame Using C++";
		p1.id = "button1";
		
		let p2 = document.createElement("button");
		p2.innerHTML = "2D Pong Game Using Java, JavaFX, and Eclipse";
		p2.id = "button2";
		
		let p3 = document.createElement("button");
		p3.innerHTML = "2D and 3D mix turn based RPG game using Unity, C#, Visual Stidio, Blender, Paint.net, and Azure DevOPs.";
		p3.id = "button3";
		
		let p4 = document.createElement("button");
		p4.innerHTML = "Task Manager Website using HTML, CSS, JavaScript, Node.js, NPM, and MongoDB";
		p4.id = "button4";
	
		let p5 = document.createElement("button");
		p5.innerHTML = "Quotation Application using QT Creator, C++, and SQLite studio";
		p5.id = "button5";
		
		let p6 = document.createElement("button");
		p6.innerHTML = "Tic Tac Toe Website using HTML, CSS, and JavaScript";
		p6.id = "button6";
		
		let p7 = document.createElement("button");
		p7.innerHTML = "System Design for my  software idea DMP";
		p7.id = "button7";
		
		proj.appendChild(p1);
		proj.appendChild(p2);
		proj.appendChild(p3);
		proj.appendChild(p4);
		proj.appendChild(p5);
		proj.appendChild(p6);
		proj.appendChild(p7);
		show.appendChild(proj);
	
		
		let section = document.getElementsByClassName("proj")[0];
		console.log("section.length = "+section.childNodes.length);
		console.dir(section);
		
		
		section.addEventListener("click", function(event) {
			console.log("here");
			//console.log("event.target = "+event.target.id);
			let a = event.target.id;
			let b = a.substring(a.length-1, a.length);
		

			const name = "Projects"+b+".html";
			
			localStorage.setItem('projectOpen', 'true');
//			projectOpen = true;
			console.log("projectOpen 4 = "+projectOpen);

			
			window.location.href = name;

    			
		});
		
					localStorage.setItem('projectOpen', 'false');



}


function renderAct(){
	// Create an array of items
	var activities = ["Hiking", "Camping", "Playing soccer", "Drawing", "Watching movies", "Playing musical instruments", "Listening to music", "Software engineering projects"]


	// Get the <ul> element by its ID
	var ul = document.createElement("ul");
	
	// Loop through the items array
	for (var i = 0; i < activities.length; i++) {
		// Create a new <li> element
		var li = document.createElement("button");
		
		// Set the text content of the <li> element
		li.textContent = activities[i];
		
		// Append the <li> element to the <ul> element
		ul.appendChild(li);
	}
	
	show.appendChild(ul);
	show.style.backgroundImage = "url('assets/pics/mac.avif')";

}















