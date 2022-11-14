import React, { useState, useEffect } from "react";
import { Tree, TreeNode } from 'react-organizational-chart';
import PMs from "./../../components/PMs/PMs";
import { getCandidateName, getCandidateAvatar } from "../../utils/helpers";
import home from './../../assets/home.png';
import Clients from "../../components/Clients/Clients";
import api from "../../api/api";
import userPhoto from './../../assets/userPhoto.png';

const FLTree = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ceos, setCeos] = useState([]);
  const [dms, setDms] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      getCeosDmsClients();
    }, 2000);
  }, []);

  const getCeosDmsClients = async () => {
    setIsLoading(true);
    const ceosResponse = await api.get('/ceos');
    console.log("ceosResponse --> ", ceosResponse.data);
    setCeos(ceosResponse.data);

    const dmsResponse = await api.get('/dms');
    console.log("dmsResponse --> ", dmsResponse.data);
    setDms(dmsResponse.data);

    const clientsResponse = await api.get('/clients');
    console.log("clientsResponse --> ", clientsResponse.data);
    setClients(clientsResponse.data);
    setIsLoading(false);
  }

  const dmsTreeGenerator = (_ceoId) => {
    const getDms = dms.filter(_dm => _dm.ceoId === _ceoId);
    // console.log("getDms --> ", getDms);

    return (<>
      {getDms && getDms.length > 0 && getDms.map((dm, i) => {
        const filterClients = clients.filter(_client => _client.dmId === dm.dmId);
        return (<TreeNode key={i} label={<div className="styled-node mt-4">
          <img src={getCandidateAvatar(dm.candidateId)} className="tree-icons" alt="avatar" />
          <div className="tree-candidate-name m-3">{getCandidateName(dm.candidateId)}</div>
        </div>}>
          <PMs _dmId={dm.dmId} />
          <Clients _dmId={dm.dmId} />
        </TreeNode>)
      })}
    </>);
  }


  return (
    <div className="m-auto py-5">
      {/* <h5 className='text-center bold-text mt-3 mb-4'>FLTree</h5> */}


      {isLoading && (
        <div className='notFoundCenteredDiv'>
          <div className='m-auto text-center'>
            <div className="spinner-border m-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>)}

      {!isLoading && (<Tree
        lineWidth={'5px'}
        lineColor={'#ff5722'}
        lineBorderRadius={'10px'}
        label={<div className="styled-node">
          <div>
            <img src={home} className="tree-icons" alt="avatar" />
            <div className="root-name m-3">Fission Labs</div>
          </div>
        </div>}
      >
        {ceos && ceos.map(ceo => (<TreeNode label={<div className="styled-node mt-4">
          <div>
            <img src={userPhoto} className="tree-icons" alt="avatar" />
            <div className="tree-candidate-name m-2">{ceo.name}</div>
          </div></div>}>
          {dmsTreeGenerator(ceo.ceoId)}
        </TreeNode>))}
      </Tree>)}
    </div>
  );
};

export default FLTree;
