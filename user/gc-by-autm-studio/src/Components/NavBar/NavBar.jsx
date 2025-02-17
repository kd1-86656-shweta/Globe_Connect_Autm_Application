import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

import logout from '../../Images/logout.png'

const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        sessionStorage.clear(); // Clear session storage      
        navigate('/login', { replace: true }); // Navigate to login and replace history
    }
    
    const goToAddPost = ()=>{

        navigate('/add-post')

    }

 

    return <>

        <div className="navHolder">
            <nav className="navBar">
                <div className="logoHolder">
                    <Link to='/home' style={{color:"#dbdbdb", textDecoration:"none"}}><h2>autm</h2></Link>
                </div>
                <div className='searchBarHolder'>
                    <input type='text' placeholder='Search user/topic '/>
                </div>
                <div className="buttonsHolder">
                    {/* <button onClick={goToAddPost}>Add Post</button> */}
                    
                    <button onClick={onLogout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <path d="M13 3h-7c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h7" />
    <path d="M16 12l4-4m0 0l-4-4m4 4H9" />
  </g>
</svg>
Logout</button>
                </div>
            </nav>
            
        </div>


    </>

}

export default NavBar