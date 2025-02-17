import { Route, Router, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Screens/Login';
import Register from './Screens/Register';
// import PostBlock from './Components/Post/PostBlock';
import Home from './Screens/Home';
import AddPost from './Screens/AddPost';
import CommunityGrid from './Screens/CommunityGrid';
import UserProfile from './Screens/UserProfile';
import CommunityProfile from './Screens/CommunityProfile';


function App() {
  return <>
    <Routes>
      <Route path='/' element = {<Login/>} ></Route>
      <Route path='/login' element = {<Login/>} ></Route>
      <Route path='/signup' element = {<Register/>} ></Route>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/add-post' element = {<AddPost/>}></Route>
      <Route path='/explore-communities' element = {<CommunityGrid/>}></Route>
      <Route path='/user-profile' element = {<UserProfile/>}></Route>
      {/* <Route path='/community-profile' element = {<CommunityProfile/>}></Route> */}
      <Route path="/community-profile/:title" element={<CommunityProfile />} />

    </Routes>

    <ToastContainer/>
    
  </>  
}



export default App;
