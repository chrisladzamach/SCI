import { NavComponent } from './components/molecules/NavComponent'
import { Routes, Route } from 'react-router-dom'
import { MainApp } from './pages/MainApp'
import { IcMain } from './pages/IC/IcMain'
import { LmbMain } from './pages/LmbMain'
import { LfqMain } from './pages/LfqMain'
import { IcForm1 } from './pages/IC/IcForm1' 
import { IcForm2 } from './pages/IC/IcForm2'
import { IcForm3 } from './pages/IC/IcForm3'
import { IcForm4 } from './pages/IC/IcForm4'
import { IcForm5 } from './pages/IC/IcForm5'
import { IcForm6 } from './pages/IC/IcForm6'

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
        <Route path="/form3" element={<IcForm3 />} />
        <Route path="/form4" element={<IcForm4 />} />
        <Route path="/form5" element={<IcForm5 />} />
        <Route path="/form6" element={<IcForm6 />} />
        
        {/* Routes of LMB */}
        <Route path="/lmbmain" element={<LmbMain />} />

        {/* Routes of LMB */}
        <Route path="/lfqmain" element={<LfqMain />} />
      </Routes>
    </div>
  )
}
