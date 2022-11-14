import React, { useState, useEffect } from "react";
import { TreeNode } from 'react-organizational-chart';
import clientsIcon from './../../assets/clients-icon.png';
import Projects from "../Projects/Projects";
import api from "../../api/api";

const Clients = ({ _dmId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showClientsCount, setShowClientsCount] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    console.log("_dmId --> ", _dmId);
    getClients();
  }, []);

  const getClients = async () => {
    setIsLoading(true);
    const clientsResponse = await api.get(`/clients/?dmId=${_dmId}`);
    console.log("clientsResponse --> ", clientsResponse.data);
    setClients(clientsResponse.data);
    setIsLoading(false);
  }

  const toggleShowClientsCount = () => {
    // console.log("toggleShowCount triggered");
    // console.log("showClientsCount --> ", showClientsCount);
    setShowClientsCount(prev => !prev);
  }

  return (<>{!showClientsCount && (<TreeNode label={<div className="styled-node">
    <div className="d-flex flex-column mb-4">
      <img src={clientsIcon} alt="Project Managers" className="tree-info-img" />
      <div className="tree-candidate-name m-3">Clients</div>
      <div className="tree-counts-indicator">Total Projects - {clients.length}</div>
    </div>
    <div className="m-auto text-center">{clients.length > 0 && (<span className="counts-indicator" onClick={toggleShowClientsCount}><i class="bi bi-caret-down-fill"></i></span>)}</div>
  </div>} />)}
    {showClientsCount && clients.length > 0 && (<TreeNode label={<div className="styled-node">
      <div className="d-flex flex-column mb-4">
        <img src={clientsIcon} alt="Project Managers" className="tree-info-img" />
        <div className="tree-candidate-name m-3">Clients</div>
        <div className="tree-counts-indicator">Total Projects - {clients.length}</div>
      </div>
      <div className="m-auto text-center">{clients.length > 0 && (<span className="counts-indicator" onClick={toggleShowClientsCount}><i class="bi bi-caret-up-fill"></i></span>)}</div>
    </div>}>
      {clients.map(_client => (<Projects _clientId={_client.clientId} _clientName={_client.name} />))}</TreeNode>)}
  </>);
};

export default Clients;
