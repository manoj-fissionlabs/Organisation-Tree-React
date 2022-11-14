import React, { useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="page-container">
      <div className="m-auto">
        <div className="col-md-8 m-auto">
          <h5 className='text-center bold-text mt-3 mb-4'>This is Home page</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
