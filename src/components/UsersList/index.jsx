import React from 'react';
import User from '../User'; 

function UsersList({ users, remove, incrAge }) {

  return (
    <div>
       {
      users.map(user => <User key={user.id} {...user} remove={remove} incrAge={incrAge}/>
      )}
    </div>
  );
}

export default UsersList;