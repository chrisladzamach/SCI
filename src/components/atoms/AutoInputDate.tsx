import React, { useEffect, useRef } from 'react';

interface AutoInputDateProps {
  id?: string;
  name?: string;
  className?: string;
}

export const AutoInputDate: React.FC<AutoInputDateProps> = ({ id, name, className }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', (event) => {
        event.preventDefault();
        if (inputRef.current) {
          inputRef.current.blur();
        }
      });
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('focus', () => {});
      }
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="date"
      id={id}
      name={name}
      className={`shadow cursor-not-allowed appearance-none border rounded p-2 bg-zinc-200 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      value={formattedDate}
      readOnly
    />
  );
};