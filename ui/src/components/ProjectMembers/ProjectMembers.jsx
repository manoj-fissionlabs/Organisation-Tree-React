import React, { useState, useEffect } from "react";
import { TreeNode } from 'react-organizational-chart';
import clientIcon from './../../assets/client.png';
import { getCandidateName, getCandidateAvatar } from "../../utils/helpers";

const ProjectMembers = ({ _projectMemberId }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("_projectMemberId --> ", _projectMemberId);
  }, []);

  return (<>
    <TreeNode label={<div className="styled-node mt-4">
      <img src={getCandidateAvatar(_projectMemberId)} className="tree-icons" alt="avatar" />
      <div className="tree-candidate-name m-3">{getCandidateName(_projectMemberId)}</div>
    </div>}>
    </TreeNode>
  </>);
};

export default ProjectMembers;
