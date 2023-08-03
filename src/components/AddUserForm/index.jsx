import React from 'react'
import style from './style.module.css';


export default function AddUserForm() {
    function submit(event){
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const gender = event.target.gender.value;
      const age = event.target.age.value;

      const user = {firstName, lastName, gender, age}
      console.log(user);
      event.target.reset();
    }
  return (
    <div className='form'>
      <form action="" onSubmit={submit}>
        <input type="text" name='firstName' placeholder='firstName' />
        <input type="text" name='lastName' placeholder='lastName' />
        <input type="text" name='gender' placeholder='gender' />
        <input type="number" name='age' placeholder='age' />
        <button >Submit</button>
      </form>

    </div>
  );
}
