/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Aditya Bhandari",
    role: "Web Developer",
    contact: {
        mobile: "xxx-xxx-xxx",
        email: "arb492@nyu.edu",
        github: "adityarb88",
        twitter: "adityarb",
        location: "Jersey City"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "Welcome!",
    skills: [
        "HTML","CSS","Javscript"
    ]
}

var education = {
    "schools": [
        {
            "name": "NYU",
            "location": "NYC",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": 2013,
            "url": "http://www.example.com"
        },
        {
            "name": "PICT",
            "location": "Pune",
            "degree": "Bachelors",
            "majors": ["CS"],
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
            "employer": "IBM",
            "title": "Systems Engineer",
            "location": "New York",
            "dates": "Jun 2010 - Dec 2010",
            "description": "lorem ipsum"
        },
        {
            "employer": "Barclays",
            "title": "Technology Analyst",
            "location": "New York",
            "dates": "March 2013 - July 2014",
            "description": "lorem ipsum"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "2013",
            "description": "lorem ipsum",
            "images": [
                "http://placehold.it/50x50",
                "http://placehold.it/50x50"
            ]
        }
    ]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#header').append(formattedBioPic);

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
