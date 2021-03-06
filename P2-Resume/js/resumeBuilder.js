'use strict';


var bio = {
	'name' : "Jonathan Reyles",
	"role" : "Full-Stack Developer & Data Scientist",
	"welcomeMessage" : "Welcome to my Resume Page",
	"bioPic": "http://placekitten.com/g/200/300",
	"contacts" : {"mobile" : "(626)617-5597",
	"email" : "jreyles@gmail.com",
	"github" : "github.com/jreyles",
	"twitter": "@jreyles",
	"location" : "San Jose, CA"	
	} ,
	"skills" : ["MEAN Stack", "LAMP Stack", "Python/Django Stack"],
};
// Dot notation to clear up the object's namespace from being too cluttered
bio.display = function() {

$("#header").append(HTMLworkStart);

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedbioPic = HTMLbioPic.replace('%data%',bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);

$('#header').prepend(formattedName);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedbioPic);
$('#header').prepend(formattedWelcome);



//	$("#topcontacts").append(bio.contacts);
//	$('footerContacts').append(bio.contacts);


	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	$('.flex-box').append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$('.flex-box').append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$('.flex-box').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$('.flex-box').append(formattedLocation);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
//	$('#topcontacts').prepend(formattedMobile);
//	var formattedLocation = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

	$('.flex-box').append(formattedGithub);




if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);

}




};

var work = {
	'jobs' : [
	{
	'employer' : "self-employed",	
	"title" : "I'm CEO, Bitch",
	"location" : "San Jose, CA",
	"dates" : "August 2011-present",
	"description" : "fefwefwef"
	},
	{
	"employer" : "Indie",	
	"title" : "Yogi",
	"location" : "San Jose, CA",
	"dates" : "June 2013 - Present",
	"description" : "wefweafwaefwaefw"
	},
	{
	"employer" : "Stealth Biotech Startup",	
	"title" : "Data Analyst",
	"location" : "San Jose, CA",
	"dates" : "Jan 2013 - June 2013",
	"description" : "123"
	},
	{
	"employer" : "CommUniverCity San Jose",	
	"title" : "Project Coordinator",
	"location" : "San Jose,CA",
	"dates" : "August 2012 - December 2012",
	"description" : "123"
	},
	{
	"employer" : "CAMCOS",	
	"title" : "Research Assistant",
	"location" : "San Jose,CA",
	"dates" : "Jan 2012 - June 2012",
	"description" : "123fdfewafwe"
	},
	{
	"employer" : "Oak Ridge National Laboratory",	
	"title" : "Graduate Research Assistant",
	"location" : "Oak Ridge, TN",
	"dates" : "June 2010 - July 2011",
	"description" : "I made small things.",
	"url" : "www.ornl.gov"
	},
	{
	"employer" : "Cal Poly Pomona",	
	"title" : "Undergrad Research Assistant",
	"location" : "Pomona, CA",
	"dates" : "June 2008 - June 2010",
	"description" : "I made small things."
	}

	],

"display" : function() {
for(var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);
}

}
};

var education = {
	"schools" : [
{
		"name" : "San Jose State University",
		"location" : "Mountain View, CA",
		"dates" : "2012-2014",
		"degree" : "M.S. (Incomplete)",
		"major" : ["Computer Science"]
},
{
		"name" : "University of Tennessee",
		"location" : "Knoxville, TN",
		"dates" : "2010-2011",
		"degree" : "Ph.D. (Incomplete)",
		"major" : ["Genome Science & Technology", "Computational Sciences"]
},
{
		"name" : "California State Polytechnic University",
		"location" : "Pomona, CA",
		"dates": "2007-2010",
		"degree" : "B.S.",
		"major" : ["Physics", "Mathematics"]
}
	],
		"OnlineCourses" : [
{
		"name" : "Udacity",
		"location" : "Mountain View, CA",
		"dates" :  "2014-Present",
		"degree" : "Nanodegree",
		"major" : ["Full-Stack", "Data Analyst"]
}
		],

	"display" : function() {
	for (var edu in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[edu].name);
		$('.education-entry:last').append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
		$('.education-entry:last').append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
		$('.education-entry:last').append(formattedSchoolDates);
		var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[edu].location);
		$('.education-entry:last').append(formattedSchoolLocation);				
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
		$('.education-entry:last').append(formattedSchoolMajor);

	}

}	
};

var projects = {
    "projects" : [
        {
            "title": "HTML5 Arcade Game",
            "dates": "August 2015 - Present",
            "description": "Technologies used: jquery, javascript, CSS, HTML5",
            'images': ['images/fry.jpg']
        },
        {
            "title": "Data Visualization",
            "dates": "August 2015 - Present",
            "description": "Technologies used: jquery, javascript, CSS, HTML5",
            'images': ['images/fry.jpg']
        },

        {
            "title": "Javascript Resume",
            "dates": "June 2015-August 2015",
            "description": "Technologies used: jquery, javascript, CSS, HTML5",
            'images': ['images/fry.jpg']
        },
        {
            "title": "Quantum Biology",
            "dates": "June 2015",
            "description": "Developing a cheaper device to run surface plasmon resonance experiments on.",
            'images': ['images/fry.jpg']
        }
    ],


    "display" : function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

	if(projects.projects[project].images.length > 0 ) {
		for(var image in projects.projects[project].images)
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$('.project-entry:last').append(formattedImage);

	}

	}

}
};

$('#mapDiv').append(googleMap);


//Execute files
projects.display();
bio.display();
education.display();
work.display();
