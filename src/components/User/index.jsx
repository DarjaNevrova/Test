import React from 'react';
import style from './style.module.css';

function User({ id, firstName, lastName, gender, age, remove, incrAge}) {

    const backgroundColor = (gender === 'Male' ? '#0064c8': '#a2165c')

  return (
    <div style={{backgroundColor}} className={style.userContainer}>
      <p>Имя: {firstName}</p>
      <p>Фамилия: {lastName}</p>
      <p> Возраст: {age} <button onClick={() => incrAge(id)}>+</button></p>
      <button onClick={() => remove(id)}>Удалить</button>
    </div>
  );
}

export default User;
