import React from 'react';
import { NavLink } from 'react-router-dom';

interface FormCardProps {
  title: string;
  description: string;
  to: string;
}

export const FormCard: React.FC<FormCardProps> = ({ title, description, to }) => {
  return (
    <NavLink to={to} className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="text-md font-bold tracking-tight text-gray-300">{title}</h5>
      <p className="text-sm text-gray-400">{description}</p>
    </NavLink>
  );
};