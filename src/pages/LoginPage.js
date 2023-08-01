import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../components/img/xlogo.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center overflow-hidden">
          <img src={background} className="img-fluid" alt="backg" style={{ maxHeight: '100%', maxWidth: '100%' }}/>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" id="username" placeholder="Kullanıcı Adı" value={username} onChange={handleUsernameChange} required />
              </div>
              <div className="form-group">
                <br />
                <input type="password" className="form-control" id="password" placeholder="Şifre" value={password} onChange={handlePasswordChange} required />
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <Link to="/dashboard">
                  <input type="submit" value="Giriş" className="btn btn-dark" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
