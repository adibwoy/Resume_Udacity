/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "John Doe",
    role: "Web Designer",
    contact: {
        mobile: "999-999-999",
        email: "john.doe@example.com",
        github: "johndoe",
        twitter: "johndoe",
        location: "Jersey City"
    },
    bioPic: "images/fry.png",
    welcomeMessage: "Welcome!",
    skills: [
        "HTML","CSS","Sketch","Adobe Photoshop"
    ]
}

var education = {
    "schools": [
        {
            "name": "Parsons School of Design",
            "location": "NYC",
            "degree": "MA",
            "majors": ["Design"],
            "dates": 2013,
            "url": "http://www.example.com"
        },
        {
            "name": "Parsons School of Design",
            "location": "NYC",
            "degree": "BFA",
            "majors": ["Product Design"],
            "dates": 2010,
            "url": "http://www.example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Time Inc.",
            "title": "Senior Designer",
            "location": "New York",
            "dates": "March 2013 - July 2015",
            "description": "Produced web, motion, print, outdoor, and digital sales and marketing promotion materials. Created contemporary, thoughtful, intuitive and memorable UI and marketing assets using color, iconography, typography, balance, and priority. Produced digital assets and layout specifications for brands across Time Inc sports properties including Sports Illustrated, Golf, Fansided, and SI Kids. Led individual projects from concept to completion, in parallel with other projects while maintaining a flexible process"
        },
        {
            "employer": "Facebook",
            "title": "Visual Designer",
            "location": "New York",
            "dates": "Aug 2015 - Present",
            "description": "Inspired our clients with a vision for their brand, game-changing ideas and plans to get them executed. Drove brand and business strategy discussions to uncover huge business needs and opportunities. Uncovered social insights and develop Facebook solutions that drive the key business goals of our top clients. Partnered with others on the team to make your and their ideas shine. Worked with Product and Engineering to refine your ideas for maximum impact on the Facebook Platform"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Vintage Stamp Icon Set",
            "dates": "2013",
            "description": "A different take on Icons",
            "images": [
                "images/iconset.jpg"
            ]
        }
    ]
}

bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

    var contactKeys = Object.keys(bio.contact);

    $('#myInfo').prepend(formattedRole);
    $('#myInfo').prepend(formattedName);
    $('#myInfo').prepend(formattedBioPic);

    for(var i=0; i<contactKeys.length; i++) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%",contactKeys[i] + ": ");
        formattedContact = formattedContact.replace("%data%",bio.contact[contactKeys[i]]);
        $('#topContacts').append(formattedContact);
    }

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%",skill));
    });
}

bio.display();

education.display = function() {

    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
        var formattedDegreeName = HTMLschoolDegree.replace("%data%",school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);

        $(".education-entry:last").append(formattedSchoolName + formattedDegreeName);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);

        var schoolMajors = school.majors;
        schoolMajors.forEach(function(major) {
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",major);
            $(".education-entry:last").append(formattedSchoolMajors);
        });
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",course.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",course.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%",course.url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineUrl);
    });
}

education.display();

work.display = function() {
    work.jobs.forEach(function(work) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%",work.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.location);
        var formmattedDescription = HTMLworkDescription.replace("%data%",work.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formmattedDescription);
    });
}

work.display();

$(document).click(function(loc) {
    logClicks(loc.pageX,loc.pageY);
});

projects.display = function() {
    projects.projects.forEach(function(project){
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%",project.dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",project.description);
        $('.project-entry:last').append(formattedProjectDescription);

        if(project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $('.project-entry:last').append(formattedImage);
            })
        }
    });
};

projects.display();

$("#mapDiv").append(googleMap);
