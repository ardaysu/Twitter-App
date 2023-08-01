import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const HeaderBar = () => {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-light " to="/dashboard" ><i class="bi bi-house"></i>Anasayfa</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light" to="/userdetail" ><i class="bi bi-people"></i>Kullanıcı Detayları </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/"><i className="bi bi-box-arrow-right"></i>Çıkış Yap</Link>
        </li>        

      </ul>
    </div>
  </nav>
);
};


export default HeaderBar;

// const HeaderBar = () => {
//   const location = useLocation();

//   return (
//     <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2">
//       <li className="nav-item">
//         <Link className={`nav-link rounded-5 ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">
//           <i className="bi bi-house"></i> Anasayfa
//         </Link>