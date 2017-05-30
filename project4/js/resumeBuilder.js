var bio = {
    "name": "Jeerus Singla",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "88725-88800",
        "email": "jeerussingla74@gmail.com",
        "location": "Barnala",
        "github":"jeerus1"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Don't Call It A Dream, Call It A Plan",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "java", "C++", ]
};

var work = {
    "jobs": [{
        "employer": "Chitkara University",
        "title": "Discipline incharge",
        "location": "Rajpura,punjab,India",
        "dates": "2015",
        "description": "Manage events"
    }, ]
};

var projects = {
    "projects": [
        {
            "title": "Udacity ",
            "dates": "2017",
            "description": "Front-end project 1",
            "images": ['images/Screenshot.png']
        }
    ]
};

var education = {
    "schools": [{
        "name": "S.H.C.S School",
        "location": "Barnala,Punjab",
        "degree": "Completed Metric",
        "dates": "2013",
        "url": "www.shcpresidency.org/",
        "majors":["not applicable"]
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com",
    }]
};


bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
        /* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
        		$('#skills').append(formattedSkill);
        		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
        		$('#skills').append(formattedSkill); */
    }

    
};

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
         var formattedlocation= HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);

    }
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location)); 
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
         $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);