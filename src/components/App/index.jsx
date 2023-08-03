import React, { useState } from 'react';
import UsersList from '../UsersList';
import User from '../User';
import AddUserForm from '../AddUserForm';


function App() {

  const defaultUsers = [
    { id: 1, firstName: "Dasa", lastName: "Nevrova", gender: "Female", age: 22 },
    { id: 2, firstName: "Kirill", lastName: "Demjanov", gender: "Male", age: 32 },
    { id: 3, firstName: "Tom", lastName: "Erikov", gender: "Male", age: 45 },
    { id: 4, firstName: "Katerina", lastName: "Petrova", gender: "Female", age: 18 },
    { id: 5, firstName: "Daniel", lastName: "Dzonsons", gender: "Male", age: 29 },
  ];

  const [users, setUsers] = useState(defaultUsers);
  const addUser = (newUser) => {

    const newId = Math.max(...users.map((user) => user.id)) + 1;
    newUser.id = newId;
    setUsers([...users, newUser]);
  };

    const remove = (removeId) => {
    setUsers(users.filter(({id}) => id !== removeId));
  };

  const incrAge = (incrId) => {
    users.find(({id}) => id === incrId).age++;
    setUsers([...users]);
  };



  return (
    <div>
      <UsersList users={users} remove={remove} incrAge={incrAge} AddUserForm={AddUserForm} />
    </div>
  );
}

export default App;
