import React from "react";

function UserCard({ user }) {
  return (
    <div className="container">
      <div className="card mt-3 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header">Kullanıcı Detayları</div>
        <img
          src={user.avatar}
          className="card-img-top mx-auto mt-2"
          style={{ maxWidth: "100px" }}
          alt="..."
        />
        <div className="card-body mx-4">
          <h5 className="card-title">
            {user.first_name} {user.last_name}
          </h5>
          <div className="card" style={{ width: "500px" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{color:"#0d6efd"}}>
                <i class="bi bi-person"></i> {user.username}
              </li>
              <li className="list-group-item">
                <i class="bi bi-envelope-at"></i> {user.email}
              </li>
              <li className="list-group-item">
                <i class="bi bi-gender-ambiguous"></i> {user.gender}
              </li>
              <li className="list-group-item">
                <i class="bi bi-geo-alt-fill"></i> {user.city}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
