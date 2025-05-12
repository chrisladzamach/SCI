import React, { useState, useEffect, useRef } from 'react';

interface AutoInputTimeProps {
  id?: string;
  name?: string;
  className?: string;
}

export const AutoInputTime: React.FC<AutoInputTimeProps> = ({ id, name, className }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

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
      type="time"
      id={id}
      name={name}
      className={`shadow cursor-not-allowed appearance-none border rounded p-2 bg-zinc-200 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      value={currentTime}
      readOnly
    />
  );
};