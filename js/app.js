'use strict';
var projects = [];

function Project(data) {
  this.pname = data.pname;
  this.pdate = data.pdate;
  this.purl = data.purl;
  this.description = data.description;
};
Project.prototype.toHtml = function() {
  var $newProject = $('#project-template').html();
  var template = Handlebars.compile($newProject);
  return template(this);
};
devProjects.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});
projects.forEach(function(projectObj) {
  $('#projects').append(projectObj.toHtml());
});

// $('section').not('#home').hide();
//
// $('nav').on('click', '.tab', function(event){
//   var $activeDiv = $(this).attr('href');
//   event.preventDefault();
//   $activeDiv.show(800);
//   // $activeDiv.hide(1600);
//   console.log('I was clicked');
// });
