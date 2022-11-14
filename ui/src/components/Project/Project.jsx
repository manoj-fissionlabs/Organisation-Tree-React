import React, { useState, useEffect, useRef } from "react";
import { TreeNode } from 'react-organizational-chart';
import projectIcon from './../../assets/project-icon.jpg';
import ProjectMembers from "./../ProjectMembers/ProjectMembers";

const Project = ({ _projectDetails }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showProjectMembers, setShowProjectMembers] = useState(false);

  useEffect(() => {
    console.log("_projectDetails --> ", _projectDetails);
  }, []);

  const toggleShowProjectMembersCount = () => {
    setShowProjectMembers(prev => !prev);
  }

  return (<>
    {!showProjectMembers && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={projectIcon} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">{_projectDetails.name}</div>
        {_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'] && (<div className="tree-counts-indicator">Team Size - {_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].length}</div>)}
      </div>
      <div className="m-auto text-center">{_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds']?.length > 0 && (<span className="counts-indicator" onClick={toggleShowProjectMembersCount}><i class="bi bi-caret-down-fill"></i></span>)}</div>
    </div>} />)}
    {showProjectMembers && _projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds']?.length > 0 && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={projectIcon} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">{_projectDetails.name}</div>
        {_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].length > 0 && (<div className="tree-counts-indicator">Team Size - {_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].length}</div>)}
      </div>
      <div className="m-auto text-center">{_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].length > 0 && (<span className="counts-indicator" onClick={toggleShowProjectMembersCount}><i class="bi bi-caret-up-fill"></i></span>)}</div>
    </div>}>
      {_projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].length > 0 && _projectDetails?.['projectDetails'][0]?.[0]?.['teamMembersIds'].map(_member => (<ProjectMembers _projectMemberId={_member} />))}
    </TreeNode>)}
  </>);
};

export default Project;
