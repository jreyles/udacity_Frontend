/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Jonathan Reyles";
var awesomeThoughts = "My" + name + " is Jonathan and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
var role = "Full-Stack Web Developer";

var formattedName = HTMLheaderName.replace('%data%',name);
var formattedRole = HTMLheaderName.replace('%data%',role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Jonathan Reyles",
	"role" : "Web Developer",
	"welcomeMessage" : "What's up?",
	"contacts" : [
	{"mobile" : "(626)617-5597",
	"e-mail" : "jreyles@gmail.com",
	"github" : "github.com/jreyles",
	"twitter": "@jreyles"	
	}] ,
	"skills" : ["MEAN Stack", "LAMP Stack", "Python/Django Stack"]

}

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
	"employer" : "IndiePrana",	
	"title" : "Yogi",
	"location" : "Online & Silicon Valley",
	"dates" : "June 2013 - Present",
	"description" : "Namaste"
	},
	{
	"employer" : "Stealth Biotech Startup",	
	"title" : "Yogi",
	"location" : "Online & Silicon Valley",
	"dates" : "Jan 2013 - June 2013",
	"description" : "Namaste"
	},
	{
	"employer" : "CAMCOS",	
	"title" : "Research Assistant",
	"location" : "Silicon Valley",
	"dates" : "August 2012 - December 2012",
	"description" : "Namaste"
	},
	{
	"employer" : "CAMCOS",	
	"title" : "Research Assistant",
	"location" : "Silicon Valley",
	"dates" : "Jan 2012 - June 2012",
	"description" : "Namaste"
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
		"city" : "Mountain View, CA",
		"degree" : "M.S. (Incomplete)",
		"major" : ["Computer Science"]
},
{
		"name" : "University of Tennessee",
		"city" : "Knoxville, TN",
		"degree" : "Ph.D. (Incomplete)",
		"major" : ["Genome Science & Technology", "Computational Sciences"]
},
{
		"name" : "California State Polytechnic University",
		"city" : "Pomona, CA",
		"degree" : "B.S.",
		"major" : ["Physics", "Mathematics"]
}
	],
		"OnlineCourses" : [
{
		"name" : "Udacity",
		"city" : "Mountain View, CA",
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





if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);


}

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

displaywork();


var displayProjects = {


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


