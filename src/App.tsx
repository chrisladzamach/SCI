import './App.css'
import { NavComponent } from './components/molecules/NavComponent'
import { Routes, Route } from 'react-router-dom'
import { MainApp } from './pages/MainApp'
import { IcMain } from './pages/IC/IcMain'
import { LmbMain } from './pages/LmbMain'
import { LfqMain } from './pages/LfqMain'
import { Form1 } from './pages/IC/Form1' 

export const App = () => {

  return (
    <div className='h-screen w-screen'>
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainApp />} />
        
        {/* Routes of ic */}
        <Route path="/icmain" element={<IcMain />} />
        <Route path="/form1" element={<Form1 />} />
        
        {/* Routes of LMB */}
        <Route path="/lmbmain" element={<LmbMain />} />

        {/* Routes of LMB */}
        <Route path="/lfqmain" element={<LfqMain />} />
      </Routes>
    </div>
  )
}
