import React from 'react';

interface InputProps {
  type: 'password' | 'text';
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => (
  <div>
    <input className="input-login" type={type} placeholder={placeholder} />
  </div>
);

export default Input;
