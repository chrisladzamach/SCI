import { NavLink } from 'react-router-dom';
import React from 'react';

interface FormCardProps {
  title: string;
  description: string;
  to: string;
}

export const FormCard: React.FC<FormCardProps> = ({ title, description, to }) => {
  return (
    <NavLink to={to} className="block max-w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow ">
      <h5 className="text-lg font-bold tracking-wired text-gray-300">{title}</h5>
      <p className="text-md text-gray-400">{description}</p>
    </NavLink>
  );
};