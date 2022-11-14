import React, { useState, useEffect } from "react";
import { TreeNode } from 'react-organizational-chart';
import { getCandidateName, getCandidateAvatar } from "../../utils/helpers";
import projectManagers from './../../assets/Project-managers.png';
import api from "../../api/api";

const PMs = ({ _dmId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPmsCount, setShowPmsCount] = useState(false);
  const [pms, setPms] = useState([]);

  useEffect(() => {
    console.log("_dmId --> ", _dmId);
    getPms();
  }, []);

  const getPms = async () => {
    setIsLoading(true);
    const pmsResponse = await api.get(`/pms/?dmId=${_dmId}`);
    console.log("pmsResponse --> ", pmsResponse.data);
    setPms(pmsResponse.data);
    setIsLoading(false);
  }

  const toggleShowPmsCount = () => {
    setShowPmsCount(prev => !prev);
  }

  return (<>{!showPmsCount && (<TreeNode label={<div className="styled-node">
    <div className="d-flex flex-column mb-4">
      <img src={projectManagers} alt="Project Managers" className="tree-info-img" />
      <div className="tree-candidate-name m-3">Project Managers</div>
      <div className="tree-counts-indicator">{pms.length}</div>
    </div>
    <div className="m-auto text-center">{pms.length > 0 && (<span className="counts-indicator" onClick={toggleShowPmsCount}><i class="bi bi-caret-down-fill"></i></span>)}</div>
  </div>} />)}
    {showPmsCount && pms.length > 0 && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={projectManagers} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">Project Managers</div>
        <div className="tree-counts-indicator">{pms.length}</div>
      </div>
      <div className="m-auto text-center">{pms.length > 0 && (<span className="counts-indicator" onClick={toggleShowPmsCount}><i class="bi bi-caret-up-fill"></i></span>)}</div>
    </div>}>
      {pms.map(_pm => (<TreeNode label={<div className="styled-node mt-4">
        <img src={getCandidateAvatar(_pm.candidateId)} className="tree-icons" alt="avatar" />
        <div className="tree-candidate-name m-3">{getCandidateName(_pm.candidateId)}</div>
      </div>} />))}
    </TreeNode>)}
  </>);
};

export default PMs;
