import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { trimValidator } from "../../utils/validationsHelper";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [password, setPassword] = useState('');
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setErrorMsg('');
    switch (name) {
      case 'username':
        setUsername(value);
        if (!trimValidator(value)) {
          setHasUsernameError(true);
        } else {
          setHasUsernameError(false);
        }
        break;
      case 'password':
        setPassword(value);
        if (!trimValidator(value)) {
          setHasPasswordError(true);
        } else {
          setHasPasswordError(false);
        }
        break;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);
    const getUsername = username.trim();
    const getPassword = password;

    if (!trimValidator(username)) {
      alert('Please Enter Username');
      setIsLoading(false);
      setHasUsernameError(true);
      return false;
    }
    if (!trimValidator(password)) {
      alert('Please Enter Password');
      setIsLoading(false);
      setHasPasswordError(true);
      return false;
    }

    if (getUsername && getPassword) {
      if (getUsername === 'fission' && getPassword === 'P@assword12345') {
        setTimeout(() => {
          setIsLoading(false);
          navigate('/fl-tree');
        }, 2000);
      } else {
        setIsLoading(false);
        setErrorMsg('Invalid credentials provided');
      }
    } else {
      setErrorMsg('Invalid credentials provided');
      setIsLoading(false);
    }
  }

  return (
    <div className="page-container">
      <div className="m-auto">
        <div className="col-md-8 m-auto">
          <h5 className='text-center bold-text mt-3 mb-4'>Login</h5>
          <div className="form-group mb-2">
            <label className="mb-1 formField-title"> Username
              <span className='text-danger'>*</span>
            </label>
            <input
              type="text"
              name="username"
              className={`form-control ${hasUsernameError ? 'border-danger' : ''}`}
              placeholder="Enter Username / Email"
              autoComplete="off"
              value={username}
              onChange={(e) => handleInputChange(e)} />
          </div>
          <div className="form-group">
            <label className="mb-1 formField-title"> Password
              <span className='text-danger'>*</span>
            </label>
            <input
              type="password"
              name="password"
              className={`form-control ${hasPasswordError ? 'border-danger' : ''}`}
              placeholder="Enter Password"
              autoComplete="off"
              value={password}
              onChange={(e) => handleInputChange(e)} />
          </div>

          {errorMsg && (
            <p className='error-msg my-4 bold-text text-center'>{errorMsg}</p>
          )}

          {isLoading && (
            <div className='m-auto text-center mt-3'>
              <div className="spinner-border m-auto my-2 login-loader" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)}

          <div className={`form-group w-100 mb-5 ${(errorMsg || isLoading) ? 'mt-2' : 'mt-4'}`}>
            <button
              type="submit"
              className={'btn w-100 submit-button'}
              disabled={isLoading}
              onClick={(e) => handleLogin(e)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
