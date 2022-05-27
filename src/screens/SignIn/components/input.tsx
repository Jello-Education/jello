import React from 'react';

const Input = (props) => {
  return (
   <div>
    <input className="input-login" type={props.type} placeholder={props.placeholder} />
   </div>
  )
}

export default Input;