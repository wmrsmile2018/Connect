import React from 'react';
import './W_projects.css';
import placeholder from './../../../images/w_project_placeholder/placeholder_proj.png';

let projects = [
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project1" ,imgClass: "img1"},
  {projectsClass: "project2" ,imgClass: "img2"},
  {projectsClass: "project3" ,imgClass: "img3"},
  {projectsClass: "project4" ,imgClass: "img4"}
]

let elementsProject = projects.map((project) =>
  <div className={"projects"  + projects.indexOf(project) % 2 + " " + project.projectsClass}>
        <img src={placeholder} className={project.imgClass}/>
        <div className="footerProject">
          <div className="wrap_footerProject">
            <p className="projectName"> Project Name </p>
            <p className="author"> Author </p>
            <p className="date"> 20.10.2019 </p>
          </div>
        </div>
  </div>
);

const W_projects = () => {
  return (
    <div className="W_projects">
        {elementsProject}
    </div>
  );
}


export default W_projects;
