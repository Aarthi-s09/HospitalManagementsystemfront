
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Paitentlogin from './Components/Patient/Patientlogin';
import PatientRegister from './Components/Patient/PatientRegister';
import PatientHome from './Components/Patient/PatientHome';
import Department from './Components/Department'
import Appointment from './Components/Appointment';
import Insurance from './Components/Patient/Insurance';
import Vaccination from './Components/Patient/Vaccination';
import Pharmacy from './Components/Patient/Pharmacy';
import Cart from './Components/Patient/Cart';
import HealthGuidance from './Components/Patient/HealthGuidance';
import Doctorlogin from './Components/Doctor/Doctorlogin';
import AppointmentStatus from './Components/Doctor/AppointmentStatus';
import Admin from './Components/Admin/Admin';
function App() {
 

  return (
    <Routes>
       <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/patientlogin" element={<Paitentlogin />} />
          <Route path="/patientRegister" element={<PatientRegister />} />
          <Route path="/patienthome" element={<PatientHome/>} />
          <Route path="/department" element={<Department/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/insurance" element={<Insurance/>}/>
          <Route path="/vaccination" element={<Vaccination/>}/>
          <Route path="/pharmacy" element={<Pharmacy/>}/>
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/healthguidance" element={<HealthGuidance/>} />
          <Route path="/doctorlogin" element={<Doctorlogin/>} />
          <Route path="/appointment-status" element={<AppointmentStatus/>} />
          <Route path="/admin" element={<Admin/>} />

          </Route>
    </Routes>
  )
}

export default App
