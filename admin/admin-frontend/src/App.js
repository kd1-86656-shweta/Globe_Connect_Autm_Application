import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Login from './Screens/adminLogin/login';
import Signup from './Screens/adminSignup/signup';
import Community from './Screens/commuityList/community';  // Make sure the path is correct
import About from './Screens/about';
import Services from './Screens/service';
import TermsOfService from './Screens/terms';
import PrivacyPolicy from './Screens/privacy';
import Dashboard from './Screens/adminDashboard/dashboard';
import Reports from './Screens/reportList/report';
import Posts from './Screens/postList/post';
import Users from './Screens/userList/user';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS



function App() {
  return <>
    <Routes>
      <Route path='/' element = {<Login/>} ></Route>
      <Route path='/login' element = {<Login/>} ></Route>
      <Route path='/signup' element = {<Signup/>} ></Route>
      <Route path='/dashboard' element = {<Dashboard/>} ></Route>
      <Route path='/community' element = {<Community/>} ></Route>
      <Route path='/reports' element = {<Reports/>} ></Route>
      <Route path='/posts' element = {<Posts/>} ></Route>
      <Route path='/users' element = {<Users/>} ></Route>
      <Route path='/about' element = {<About/>} ></Route>
      <Route path='/service' element = {<Services/>} ></Route>
      <Route path='/terms' element = {<TermsOfService/>} ></Route>
      <Route path='/privacy' element = {<PrivacyPolicy/>} ></Route>
      
    </Routes>

    <ToastContainer/>
    
  </>  
}



export default App;
