import React, { useState, useEffect } from 'react';
import { NavLinkComponent } from '../atoms/NavLinkComponent';

export const NavComponent: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-600 shadow-md max-w-screen">
      <ul className="flex ">
        <li>
          <NavLinkComponent to="/">Inicio</NavLinkComponent>
        </li>
        <li>
          <NavLinkComponent to="/icmain">
            {isDesktop ? 'Inspección de Calidad' : 'IC'}
          </NavLinkComponent>
        </li>
        <li>
          <NavLinkComponent to="/lmbmain">
            {isDesktop ? 'Laboratorio de Microbiología' : 'LMB'}
          </NavLinkComponent>
        </li>
        <li>
          <NavLinkComponent to="/lfqmain">
            {isDesktop ? 'Laboratorio de Fisicoquímico' : 'LFQ'}
          </NavLinkComponent>
        </li>
      </ul>
    </nav>
  );
};