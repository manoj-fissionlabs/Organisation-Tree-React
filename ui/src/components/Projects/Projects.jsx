import React, { useState, useEffect, useRef } from "react";
import { TreeNode } from 'react-organizational-chart';
import { Modal } from 'bootstrap';
import projectIcon from './../../assets/project-icon.jpg';
import clientIcon from './../../assets/client.png';
import api from "../../api/api";
import { trimValidator } from "../../utils/validationsHelper";
import Project from "./../Project/Project";

const Projects = ({ _clientId, _clientName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [showProjectsCount, setShowProjectsCount] = useState(false);
  const [showProjectMembers, setShowProjectMembers] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [hasProjectNameError, setHasProjectNameError] = useState('');
  const openModalRef = useRef();
  const closeModalRef = useRef();

  useEffect(() => {
    // console.log("_clientId --> ", _clientId);
    getProjects();
  }, []);

  const getProjects = async () => {
    setIsLoading(true);
    const projectsResponse = await api.get(`/projects/?clientId=${_clientId}`);
    console.log("projectsResponse --> ", projectsResponse.data);
    setProjects(projectsResponse.data);
    setIsLoading(false);
  }

  const toggleShowProjectMembersCount = () => {
    setShowProjectMembers(prev => !prev);
  }

  const toggleShowProjectsCount = () => {
    setShowProjectsCount(prev => !prev);
  }

  const showModal = () => {
    const modalEle = openModalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: 'static',
      keyboard: false,
    });
    bsModal.show();
  };

  const closeModal = () => {
    console.log("closeModal");
  }

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'projectName':
        setProjectName(value);
        if (!trimValidator(value)) {
          setHasProjectNameError(true);
        } else {
          setHasProjectNameError(false);
        }
        break;
    }
  }

  const handleAddProject = async () => {
    setIsAddingProject(true);
    const getProjectName = projectName.trim();
    if (!getProjectName) {
      setHasProjectNameError(true);
      alert("Please enter Project name");
    } else {
      // alert(projectName);
      const d = new Date();
      const seconds = d.getTime();
      const apiData = {
        id: seconds,
        projectId: projects.length,
        clientId: _clientId,
        name: getProjectName,
        projectDetails: [
          [
            {
              "leadId": 5
            }
          ]
        ]
      }
      const customConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const projectResponse = await api.post(`/projects`, JSON.stringify(apiData), customConfig);
      console.log("projectResponse --> ", projectResponse);
      closeModalRef.current.click();
      setProjectName('');
      getProjects();
      setShowProjectsCount(true);
      setIsAddingProject(false);
    }
  }

  return (<>
    {!showProjectsCount && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={clientIcon} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">{_clientName}</div>
        <div className="tree-counts-indicator">Total projects - {projects.length}</div>
        <button className="tree-add-new-btn my-3" onClick={() => showModal()}>Add New Project</button>
      </div>
      <div className="m-auto text-center">{projects.length > 0 && (<span className="counts-indicator" onClick={toggleShowProjectsCount}><i class="bi bi-caret-down-fill"></i></span>)}</div>
    </div>} />)}
    {showProjectsCount && projects.length > 0 && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={clientIcon} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">{_clientName}</div>
        <div className="tree-counts-indicator">Total projects - {projects.length}</div>
        <button className="tree-add-new-btn my-3" onClick={() => showModal()}>Add New Project</button>
      </div>
      <div className="m-auto text-center">{projects.length > 0 && (<span className="counts-indicator" onClick={toggleShowProjectsCount}><i class="bi bi-caret-up-fill"></i></span>)}</div>
    </div>}>
      {/* {projects.map(_project => (<ProjectMembers _projectDetails={_project['projectDetails']} />))} */}
      {projects.map(_project => (<Project _projectDetails={_project} />))}
    </TreeNode>)}

    {/* 'Add New Project' Modal - starts */}
    <div className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref={openModalRef}
    >
      <div className="modal-dialog modal-dialog-centered" role="document"><div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Project</h5>
          <button type="button"
            className="btn-close visibility-hidden"
            data-bs-dismiss="modal"
            ref={closeModalRef}
            aria-label="Close" onClick={() => closeModal()}></button>
        </div>
        <div class="modal-body">
          <div className="form-group m-3 mx-5">
            <label className="mb-1 w-100 text-left"> Project Name
              <span className='text-danger'>*</span>
            </label>
            <input
              type="text"
              name="projectName"
              className={`form-control ${hasProjectNameError ? 'border-danger' : ''}`}
              placeholder={`Enter Project Name*`}
              autoComplete="off"
              value={projectName}
              onChange={(e) => handleInputChange(e)} />
          </div>

          {isAddingProject && (
            <div className='m-auto text-center mt-3'>
              <div className="spinner-border m-auto my-2 login-loader" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)}

        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" disabled={isAddingProject}>Close</button>
          <button type="button" class="btn btn-primary" disabled={isAddingProject} onClick={handleAddProject}>Add Project</button>
        </div>
      </div>
      </div>
    </div>
    {/* 'Add New Project' Modal - ends */}
  </>);
};

export default Projects;
