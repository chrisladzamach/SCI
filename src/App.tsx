import { NavComponent } from './components/molecules/NavComponent'
import { Routes, Route } from 'react-router-dom'
import { MainApp } from './pages/MainApp'
import { IcMain } from './pages/IC/IcMain'
import { LmbMain } from './pages/LmbMain'
import { LfqMain } from './pages/LfqMain'
import { IcForm1 } from './pages/IC/IcForm1' 
import { IcForm2 } from './pages/IC/IcForm2'

export const App = () => {

  return (
    <div className='h-screen w-screen'>
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainApp />} />
        
        {/* Routes of ic */}
        <Route path="/icmain" element={<IcMain />} />
        <Route path="/form1" element={<IcForm1 />} />
        <Route path="/form2" element={<IcForm2 />} />
        
        {/* Routes of LMB */}
        <Route path="/lmbmain" element={<LmbMain />} />

        {/* Routes of LMB */}
        <Route path="/lfqmain" element={<LfqMain />} />
      </Routes>
    </div>
  )
}
