// import './App.css';
// import logo from "./logo-social.png"
// import mail from "./mail.png"
// import phone from "./phone.png"
// import fb from "./fb.png"
// function App() {
//   return (
//     <div className="App">
//       <div className='navbar'>
//          <div className='button'>Liên hệ</div>
//         <div className='button'>Giới thiệu</div>
//       </div>

//       <div className='footer'>
//         <div className='foot-left'>
//           <div className='logo'><img src={logo}/></div>
//           <p>Designed by Group 1</p>
//         </div>
//          <div className='foot-right'>
//           <div className='allicon'>
//             <div className='icon'><img src={phone}/></div>
//             <div className='icon'><img src={mail}/></div>
//             <div className='icon'><img src={fb}/></div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages";
import ManagePrinter from "./pages/ManagePrinter";
import ManageUser from "./pages/ManageUser";
import SystemConfig from "./pages/SystemConfig";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/ManageUser" element={<ManageUser />} />
        <Route path="/ManagePrinter" element={<ManagePrinter />} />
        <Route path="/SystemConfig" element={<SystemConfig />} />
      </Routes>
    </Router>
  );
}

export default App;
