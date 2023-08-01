import React, { useState } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import HeaderBar from "../components/HeaderBar";
import data from "../data.json";
const UserDetail = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <HeaderBar />
      <div className="container">
        <SearchBar users={data} onSelectUser={handleSelectUser} />
        {selectedUser && <UserCard user={selectedUser} />}
      </div>
    </>
  );
};

export default UserDetail;
