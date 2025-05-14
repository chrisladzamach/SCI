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
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      event.preventDefault();
      if (inputRef.current) {
        inputRef.current.blur();
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('focus', handleFocus);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="time"
      id={id}
      name={name}
      className={`shadow cursor-not-allowed max-w-full flex-1 appearance-none border rounded p-2 bg-zinc-200 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      value={currentTime}
      readOnly
    />
  );
};