import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import UseParams from './useParams'
import HomePage from './HomePage'
import ContactUs from './ContactUs'
import Settings from './Settings'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (

    <>
  <nav>
    <ul className="flex justify-evenly h-10 bg-gray-400 items-center">
      <li onClick={()=> navigate("/")}>Home Page</li>
      <li onClick={()=>navigate("/ContactUs")}>Contact us</li>
      <li><Link to="/Settings">Settings</Link></li>
    </ul>
  </nav>


    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Settings" element={
        <div>
          <Settings/>
          <button onClick={()=> navigate("/Settings/insideSettings")}>Click me </button>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      }
    >
      <Route path='insideSettings' element={<h1>Inside Settings</h1>} />

      </Route>

      <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>


        {/* <Routes>
        <Route path='/user/:id' element={
        <UseParams/>
        }/>
      </Routes> */}
    </>
  )
}

export default App
