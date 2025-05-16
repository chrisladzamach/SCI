import { Routes, Route } from 'react-router-dom';

import { NavComponent } from './components/molecules/NavComponent';

import { MainApp } from './pages/MainApp';

import { LmbMain } from './pages/LMB/LmbMain';

import { LfqMain } from './pages/LFQ/LfqMain';

// Importaciones de módulo IC (Incpección de calidad)
import { IcMain } from './pages/IC/IcMain';
import { IcForm1 } from './pages/IC/IcForm1'; 
import { IcForm2 } from './pages/IC/IcForm2';
import { IcForm3 } from './pages/IC/IcForm3';
import { IcForm4 } from './pages/IC/IcForm4';
import { IcForm5 } from './pages/IC/IcForm5';
import { IcForm6 } from './pages/IC/IcForm6';

// Importaciones de módulo Admin
import { AdminMain } from './pages/AdminView/adminMain';

// Página not found
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <div className='h-screen w-screen'>
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainApp />} />

        {/* Admin routes */}
        <Route path="/adminMain" element={<AdminMain />} />
        
        {/* Routes of Inspección de Calidad */}
        <Route path="/icmain" element={<IcMain />} />
        <Route path="/form1" element={<IcForm1 />} />
        <Route path="/form2" element={<IcForm2 />} />
        <Route path="/form3" element={<IcForm3 />} />
        <Route path="/form4" element={<IcForm4 />} />
        <Route path="/form5" element={<IcForm5 />} />
        <Route path="/form6" element={<IcForm6 />} />
        
        {/* Routes of Laboratorio de Microbiología */}
        <Route path="/lmbmain" element={<LmbMain />} />

        {/* Routes of Laboratorio de FisicoQuímica */}
        <Route path="/lfqmain" element={<LfqMain />} />

        {/* Route of Page not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
