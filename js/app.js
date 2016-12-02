'use strict';
var projects = [];

function Project(data) {
  this.pname = data.pname;
  this.pdate = data.pdate;
  this.purl = data.purl;
  this.description = data.description;
};
Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.find('.pname').html(this.pname);
  $newProject.find('a').attr('href', this.purl);
  $newProject.find('.pdate').html(this.pdate);
  $newProject.find('.description').html(this.description);
  $newProject.removeClass('template');
  return $newProject;
};
devProjects.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});
projects.forEach(function(projectObj) {
  $('#projects').append(projectObj.toHtml());
});

$('section').not('#home').hide();

$('nav').on('click', '.tab', function(event){
  var $activeDiv = $(this).attr('href');
  event.preventDefault();
  $activeDiv.show(800);
  // $activeDiv.hide(1600);
  console.log('I was clicked');
});
