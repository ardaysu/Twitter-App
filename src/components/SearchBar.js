import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ users, onSelectUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSelectedUser(null);
  };
  const handleSelectUser = (user) => {
    setIsVisible(false);
    setSelectedUser(user);
    onSelectUser(user);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Form className="mt-3">
      <FormControl
        onClick={() => setIsVisible(true)}
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Kullanıcı adına göre ara..."
      />
      {isVisible && (
        <ul className="list-group">
          {filteredUsers.map((user) => (
            <li
              className="list-group-item list-group-item-action "
              key={user.id}
              onClick={() => handleSelectUser(user)}
            >
              {user.username}
            </li>
          ))}
        </ul>
      )}
      {selectedUser && <div></div>}
    </Form>
  );
};
export default SearchBar;
