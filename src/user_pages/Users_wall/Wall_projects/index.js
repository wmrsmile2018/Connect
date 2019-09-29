import React from 'react';
import './index.css';
import placeholder from './../../../images/w_project_placeholder/placeholder_proj.png';

let projects = [
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project1" ,imgClass: "w_project_img1"},
  {projectsClass: "w_project2" ,imgClass: "w_project_img2"},
  {projectsClass: "w_project3" ,imgClass: "w_project_img3"},
  {projectsClass: "w_project4" ,imgClass: "w_project_img4"}
]

const ElementsProject = projects.map((project) =>
  <div className={"projects"  + projects.indexOf(project) % 2 + " " + project.projectsClass}>
        <img src={placeholder} className="w_project_img"/>
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
        {ElementsProject}
    </div>
  );
}


export default W_projects;
