// General facts:
var bio = {
	"name": "Jekaterina Novikova",
	"role": "Roboticist and Developer",
	"welcomeMessage": "Welcome to my webpage!",
	"contacts": {
			"email": "novikova.jekaterina@gmail.com",
			"github": "https://github.com/jeknov",
			"linkedin": "https://www.linkedin.com/in/jnovikova",
			"location": "United Kingdom"
	},
	"bioPic": "images/me.jpg",
	"skills": ["Languages: Python, C++, JavaScript", "Version Control: Git, GitHub",
				"Data Analysis: R, SPSS, Matlab", "Web Development: jQuery, JSON, HTML/CSS"],
	display: function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	    var formattedLinkedIn = HTMLtwitter.replace("%data%", bio.contacts.linkedin);
	    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		//var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedEmail + formattedGitHub + formattedLinkedIn + formattedLocation);
    	$("#footerContacts").append(formattedEmail + formattedGitHub + formattedLinkedIn + formattedLocation);
		$("#header").append(formattedPic);
		//$("#header").append(formattedWelcome);

		$("#header").append(HTMLskillsStart);	

		for (var e in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
			$("#skills").append(formattedSkill);
		};
	}
};

// Work-related information:
var work = {
	"jobs": [
		{
			"employer": "University of Bath",
			"title": "Research Assistant",
			"location": "Bath, United Kingdom",
			"dates": "2012 - present",
			"description": "Member of a Human-Computer Interaction research group.<br>Organizer of Amoni seminars."
		},
		{
			"employer": "National Institute of Informatics",
			"title": "Visiting Researcher",
			"location": "Tokyo, Japan",
			"dates": "2014 (October - December)",
			"description": "Working on a project 'Modeling Human-Robot Collaboration in a Simulator SIGVerse'"
		},
		{
			"employer": "Vilniaus Duona",
			"title": "Head of Planning Department",
			"location": "Vilnius, Lithuania",
			"dates": "2010 - 2012",
			"description": "Sales forecasting, Analytics"
		}
	],
	display: function() {
		for (var j in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
			var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[j].description);

			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescr);
		}
	}
};

// Information about completed projects:
var project = {
	"projects": [
		{
			"title": "Modeling Human-Robot Collaboration in a Simulator SIGVerse",
			"dates": "2014 November-December",
			"description": "This work was a part of my research internship at the National Institute of Informatics in Tokyo, Japan. In this project, I modeled a collaborative human-robot interaction task where a virtual human agent is controlled remotely by human subjects to interact with an automatic virtual robot with implemented artificial emotional reactions. This project sets the first steps to explore the potential of using an enhanced human-robot interaction simulator to build socially interactive robots that can serve in educational, team building, and collaborative task solving applications.",
			"images": "http://media.tumblr.com/f5f95a88c83f97f76dd0e6ce5bd25b65/tumblr_inline_ngn3coraXH1s3tvo6.png"
		},
		{
			"title": "Affective Body Expressions in Non-humanoid Robots",
			"dates": "2014 April-September",
			"description": "Emotional expressions are able to benefit social communication between humans and robots. In this project I present a design framework for modelling emotionally expressive robotic movements and validate it by implementing expressions of five basic emotions into a non-humanoid robot. The results demonstrate that such expressions can convey the meaning of the basic emotions. The parameters of the proposed design model can convey the meaning of emotional dimensions of valence, arousal and dominance, thus creating a base for a rapid implementation of a broader range of emotions.",
			"images": ""
		},
		{
			"title": "Interactive Resume",
			"dates": "2015 January",
			"description": "This web page is a resume page for the final project of JavaScript Basics course at Udacity. The project was focused on using JSON like objects to manage content more efficiently",
			"images": "images/resume.png"
		}
	],
	display: function() {
		for (var p in project.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
			var formattedProjectDescr = HTMLprojectDescription.replace("%data%", project.projects[p].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[p].images);
			
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescr);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}; 

// Information about education and completed online courses:
var education = {
	"schools": [
		{
			"name": "University of Bath",
			"location": "Bath, United Kingdom",
			"degree": "PhD in progress",
			"majors": "Artificial Intelligence, Human-Robot Interaction",
			"url": "www.bath.ac.uk"
		},
		{
			"name": "Blekinge Institute of Technology",
			"location": "Blekinge, Sweden",
			"degree": "MSc",
			"majors": "Computer Science",
			"url": "www.bth.se"
		},
		{
			"name": "Vytautas Magnus University",
			"location": "Kaunas, Lithuania",
			"degree": "Master degree",
			"majors": "Business Informatics",
			"url": "www.vdu.lt"
		}
	],
	"onlineCourses": [
		{
			"title": "Machine Learning",
			"school": "Coursera / Stanford University",
			"teacher": "Dr. Andrew Ng"
		},
		{
			"title": "R Programming",
			"school": "Coursera / John Hopkins University",
			"teacher": "Dr. Roger D. Peng"
		},
		{
			"title": "Computing for Data Analysis",
			"school": "Coursera / John Hopkins University",
			"teacher": "Dr. Roger D. Peng"
		},
		{
			"title": "Human-Computer Interaction",
			"school": "Coursera / Stanford University",
			"teacher": "Dr. Scott Klemmer"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity / 23andMe",
			"teacher": "Cameron Pittman and James Williams"
		},
	],
	displaySchool: function() {
		for (var s in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
			//var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[s].url);
						
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			//$(".education-entry:last").append(formattedSchoolURL);
		}
	},
	displayOnlineCourses: function() {
		$("#education").append(HTMLonlineClasses);

		for (var c in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
			var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
			var formattedCourseTeacher = HTMLonlineDates.replace("%data%", education.onlineCourses[c].teacher);
						
			$(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);
			$(".education-entry:last").append(formattedCourseTeacher);
			//$(".education-entry:last").append(formattedCourseSchool);
			

		}
	}
}; 

// Displaying all the information:
bio.display();
work.display();
project.display();
education.displaySchool();
education.displayOnlineCourses();

$("#mapDiv").append(googleMap);