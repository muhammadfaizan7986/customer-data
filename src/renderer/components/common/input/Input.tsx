import React, { ChangeEvent } from 'react';

type InputProps = {
  label?: string;
  lableclassName?: string;
  id?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'file'; // Add more types as needed
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  id = 'default-input',
  type = 'text',
  className = '',
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-black dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
