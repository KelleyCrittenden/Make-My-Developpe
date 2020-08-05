import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import UserManager from '../../modules/UserManager';

const UserList = props => {

  

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return UserManager.getProfileByUser(parseInt(sessionStorage.getItem("credentials")))
    .then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };
 
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-cards">
      {users.map(user => <UserCard 
        key={user.id} 
        user={user}
        getUsers={getUsers}
        {...props}/>)}
    </div>
  );
};
export default UserList