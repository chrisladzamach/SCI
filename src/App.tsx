import './App.css'
import { NavComponent } from './components/molecules/NavComponent'
import { Routes, Route } from 'react-router-dom'
import { MainApp } from './pages/MainApp'
import { IcMain } from './pages/IcMain'
import { LmbMain } from './pages/LmbMain'
import { LfqMain } from './pages/LfqMain'
import { Form1 } from './pages/Form1' 

export const App = () => {

  return (
    <div className='h-screen w-screen'>
      <NavComponent />
      <br />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/icmain" element={<IcMain />} />
        <Route path="/lmbmain" element={<LmbMain />} />
        <Route path="/lfqmain" element={<LfqMain />} />
        <Route path="/form1" element={<Form1 />} />
      </Routes>
    </div>
  )
}
