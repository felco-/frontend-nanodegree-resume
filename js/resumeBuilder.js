var bio = {
  "name": "Fellipe Weno",
  "role": "Sysadmin",
  "contacts": {
    "mobile": "555-5555",
    "email": "root@localhost",
    "github": "ThisIsAFakeGH",
    "twitter": "@ThereIsNoTwitter",
    "location": "São Paulo"
  },
  "welcomeMessage": "Hello there! Welcome to my proto-resume page!",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/me.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    Object.keys(bio.contacts).forEach(function(contact) {
      var formattedContacts = HTMLcontactGeneric.replace("%contact%", contact);
      formattedContacts = formattedContacts.replace("%data%", bio.contacts[contact]);
      $("#topContacts").append(formattedContacts);
      $("#footerContacts").append(formattedContacts);
    });

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);
    for (var s = 0; s < bio.skills.length; s++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);
      $("#skills").append(formattedSkills);
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Universidade de São Paulo",
      "location": "São Paulo, SP",
      "degree": "Masters",
      "majors": ["Ciências da Computação", "Engenharia de Software"],
      "dates": "2008-2012",
      "url": "https://usp.br"
    },
    {
      "name": "Universidade de São Paulo",
      "location": "São Paulo, SP",
      "degree": "BA",
      "majors": ["Ciências da Computação"],
      "dates": "2003-2007",
      "url": "https://usp.br"
    }
  ],
  "onlineCourses": [
    {
      "title": "CS 6.00.1",
      "school": "MITx",
      "dates": "2015",
      "url": "https://mit.edu"
    }
  ],
  display: function() {
    $("#education").append(HTMLschoolStart);

    for (var c = 0; c < education.schools.length; c++) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[c].name);
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[c].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[c].degree);
      var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolTitle);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[c].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[c].location);
      $(".education-entry:last").append(formattedSchoolLocation);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[c].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    $("#education:last").append(HTMLonlineStart);
    $(".online-entry:last").append(HTMLonlineClasses);

    for (var o = 0; o < education.onlineCourses.length; o++) {
      var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title);
      formattedOnlineCourseTitle = formattedOnlineCourseTitle.replace("#", education.onlineCourses[o].url);
      var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school);
      var formattedOnlineCourse = formattedOnlineCourseTitle + formattedOnlineCourseSchool;
      $(".online-entry:last").append(formattedOnlineCourse);
      var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates);
      $(".online-entry:last").append(formattedOnlineCourseDates);
      var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[o].url);
      formattedOnlineCourseURL = formattedOnlineCourseURL.replace("#", education.onlineCourses[o].url);
      $(".online-entry:last").append(formattedOnlineCourseURL);
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Awesome Burguer!",
      "title": "Burguer Boy",
      "location": "Belo Horizonte, MG",
      "dates": "2015 - In Progress",
      "description": "Doing the mosty tasty burguer in the hood!",
      "url": "https://awesome.burguer.local"
    },
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "location": "São Paulo, SP",
      "dates": "2010 - December 31, 2015",
      "description": "Did all kinda of Pizzas, delicious!",
      "url": "https://planet.express.local"
    },
    {
      "employer": "Donuts All The Way",
      "title": "Delivery Boy",
      "location": "Rio de Janeiro, RJ",
      "dates": "2005 - June 28, 2010",
      "description": "Donuts all over my face!",
      "url": "https://donuts.all.the.way.local"
    }
  ],
  display: function() {
    $("#workExperience").append(HTMLworkStart);
    Object.keys(work.jobs).forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedJobDates);
      var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedJobLocation);
      var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedJobDescription);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Freechat",
      "dates": "1998-2001",
      "description": "Some realtime chat.",
      "url": "https://freechat.local.geocitieshavediedlongtimeago",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ],
  display: function() {
    $("#projects").append(HTMLprojectStart);
    Object.keys(projects.projects).forEach(function(project) {
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);
      Object.keys(projects.projects[project].images).forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      });
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
