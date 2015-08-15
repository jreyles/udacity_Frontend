/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name = "Jonathan Reyles";

/*
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';



*/



//var awesomeThoughts = "My" + name + " is Jonathan and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//var role = "Full-Stack Web Developer";





var bio = {
	"name" : "Jonathan Reyles",
	"role" : "Web Developer",
	"welcomeMessage" : "What's up?",
	"bioPic": "http://placekitten.com/g/200/300",
	"contacts" : [
	{"mobile" : "(626)617-5597",
	"e-mail" : "jreyles@gmail.com",
	"github" : "github.com/jreyles",
	"twitter": "@jreyles",
	"location" : "San Jose, CA"	
	}] ,
	"skills" : ["MEAN Stack", "LAMP Stack", "Python/Django Stack"],

	"display" : [" "]

};

function displaybio(){
//topcontacts
$("#header").append(HTMLworkStart);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderName.replace('%data%',bio.role);
$("#header").prepend(formattedRole);
var formattedWelcome = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
$('#header').prepend(formattedWelcome);
var formattedbioPic = HTMLbioPic.replace('%data%',bio.bioPic);
$('#header').prepend(formattedbioPic);
for(contact in bio.contacts) {
	$("#topcontacts").append(HTMLcontactGeneric);
//	var formattedEmployer = HTMLworkEmployer.replace("%data%",bio.mobile[contact].employer);
//	$('#topcontacts').prepend(formattedWelcome);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
	$('.flex-item:last').append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
	$('.flex-item:last').append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
	$('.flex-item:last').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
	$('.flex-item:last').append(formattedLocation);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
//	$('#topcontacts').prepend(formattedMobile);
//	var formattedLocation = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

	$(".flex-item:last").append(formattedGithub);

}

}


/*
$("#header").append(HTMLworkStart);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderName.replace('%data%',bio.role);
$("#header").prepend(formattedRole);
var formattedWelcome = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
$('#header').prepend(formattedWelcome);
*/
//displaybio();




var work = {
	"jobs" : [
	{
	"employer" : "self-employed",	
	"title" : "I'm CEO, Bitch",
	"location" : "San Jose",
	"dates" : "August 2011-present",
	"description" : "fefwefwef"
	},
	{
	"employer" : "Indie",	
	"title" : "Yogi",
	"location" : "Online & Silicon Valley",
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
	"employer" : "CAMCOS",	
	"title" : "Research Assistant",
	"location" : "Silicon Valley",
	"dates" : "August 2012 - December 2012",
	"description" : "123"
	},
	{
	"employer" : "CAMCOS",	
	"title" : "Research Assistant",
	"location" : "Silicon Valley",
	"dates" : "Jan 2012 - June 2012",
	"description" : "123fdfewafwe"
	},
	{
	"employer" : "Oak Ridge National Laboratory",	
	"title" : "Graduate Research Assistant",
	"location" : "Oak Ridge, TN",
	"dates" : "June 2010 - July 2011",
	"description" : "I made small things."
	},
	{
	"employer" : "Cal Poly POmona",	
	"title" : "Undergrad Research Assistant",
	"location" : "Pomona, CA",
	"dates" : "June 2008 - June 2010",
	"description" : "I made small things."
	}

	]
}

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
		]
}

var projects = {
    "projects" : [
        {
            "title": "Phylogenetic Binning",
            "dates": "Aug 2012 - Dec 2013",
            "description": "What's up my peoples",
            "images": "images/fry.jpg"
        },
        {
            "title": "iGEM Competition",
            "dates": "June 2015",
            "description": "Yep",
            "images": "images/fry.jpg"
        },
        {
            "title": "Quantum Biology",
            "dates": "June 2015",
            "description": "Ok",
            "images": "images/fry.jpg"
        }
    ]
}





//bio.display = 

if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);

}
//for(i in formattedContactInfo) {
//	$("#topContacts").append(formattedContactInfo[i]);
//	$("#footerContacts").append(formattedContactInfo[i]);
//}


function displaywork()
{
for(job in work.jobs) {
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



projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

	if(projects.projects[project].images.length > 0 ) {
		for(image in projects.projects[project].images)
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$('.project-entry:last').append(formattedImage);

	}

	}

}
projects.display();

/*var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';*/


education.display = function() {
	for (edu in education.schools) {
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
education.display();



$('#mapDiv').append(googleMap);

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

*/



$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}
//Execute files
displaybio();

displaywork();
