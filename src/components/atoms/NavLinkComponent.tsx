import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  baseClassName?: string; // Prop opcional para clases base adicionales
  activeClassName?: string; // Prop opcional para clases activas adicionales
}

export const NavLinkComponent: React.FC<NavLinkProps> = ({
  to,
  children,
  baseClassName = 'px-4 text-blue-500 underline hover:bg-blue-500 hover:text-white transition duration-200',
  activeClassName = 'bg-blue-700 text-white font-semibold hover:text-white',
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClassName} ${isActive ? activeClassName : ''}`
      }
    >
      {children}
    </NavLink>
  );
};