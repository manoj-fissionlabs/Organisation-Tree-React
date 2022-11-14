import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { dms } from "../../utils/data-old";
import PMs from "../PMs/PMs";

const DMs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeAccordionTab, setActiveAccordionTab] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="m-auto">

      {isLoading && (<div className="m-auto text-center">
        <div className="centeredDiv my-3">
          <div className="spinner-border m-auto my-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      )}

      {!isLoading && (<div>
        <h5>DMs</h5>
        {dms && dms.length > 0 && (<Accordion defaultActiveKey="0" className="dms-accordion" onSelect={(e) => setActiveAccordionTab(e)}>
          {dms.map((dm, i) => (<Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{dm.name}</Accordion.Header>
            <Accordion.Body>
              {activeAccordionTab === i && (<PMs _dmId={dm.dmId} />)}
            </Accordion.Body>
          </Accordion.Item>))}
        </Accordion>)}
      </div>)}
    </div>
  );
};

export default DMs;
