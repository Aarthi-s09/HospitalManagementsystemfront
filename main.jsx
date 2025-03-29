import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Home from './Components/Home.jsx'
import Paitentlogin from './Components//Patient/Patientlogin.jsx';

import PatientRegister from './Components//Patient/PatientRegister.jsx';
import PatientHome from './Components/Patient/PatientHome.jsx';
import Department from './Components/Department.jsx'
import Appointment from './Components/Appointment.jsx';
import Insurance from './Components/Patient/Insurance.jsx';
import Vaccination from './Components/Patient/Vaccination.jsx';
import Pharmacy from './Components/Patient/Pharmacy.jsx';
import Cart from './Components/Patient/Cart.jsx';
import HealthGuidance from './Components/Patient/HealthGuidance.jsx';
import Doctorlogin from './Components/Doctor/Doctorlogin.jsx';
import AppointmentStatus from './Components/Doctor/AppointmentStatus.jsx';
import Admin from './Components/Admin/Admin.jsx';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
  
    children: [
      
      {
        path: '/home',
        element: <Home />
      },{
        path: '/patientlogin',
        element: <Paitentlogin />
      },
      ,{
        path: '/patientRegister',
        element: <PatientRegister/>
      }, ,{
        path: '/patienthome',
        element: <PatientHome/>
      } ,{
        path: '/department',
        element: <Department/>
      },{
        path: '/appointment',
        element: <Appointment/>
      },{
        path:'/insurance',
        element:<Insurance></Insurance>
      },{
        path:'/vaccination',
        element:<Vaccination/>
      },{
        path:'/pharmacy',
        element:<Pharmacy/>
      },{
        path:'/cart',
        element:<Cart/>
      },,{
        path:'/healthguidance',
        element:<HealthGuidance/>
      },,{
        path:'/doctorlogin',
        element:<Doctorlogin/>
      },,{
        path:'/appointment-status',
        element:<AppointmentStatus/>
      }
      ,{
        path:'/admin',
        element:<Admin/>
      }
      
      

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
