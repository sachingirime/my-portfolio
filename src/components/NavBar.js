import React from 'react'
import {NavLink} from "react-router-dom"
import {SocialIcon} from 'react-social-icons'


const NavBar = () => {
    return (
        <header className = "navHeader">
            <div className = "navDiv">
                <nav className = "nav">
                   <NavLink to = '/' exact activeClassName='text-red' className = 'navHome hover:text-red-800'> Home </NavLink> 
                   <NavLink to = '/project' activeClassName='text-red' className = 'navProject hover:text-red-800'> Projects </NavLink> 


                </nav>

                <div>
                    <SocialIcon url = 'https://www.linkedin.com/in/sachin-giri-080a11137' className = 'socialIcon' target = '_blank' fgColor ='white' style = {{height: 40, width: 40}}/>
                    <SocialIcon url = 'https://twitter.com/sachin_someone' className = 'socialIcon' target = '_blank' fgColor ='white' style = {{height: 40, width: 40}}/>
                    <SocialIcon url = 'mailto:suchingiri.me@gmail.com' className = 'socialIcon' target = '_blank' fgColor ='white' style = {{height: 40, width: 40}}/>
                </div>

            </div>
        </header>
  
    )
}

export default NavBar
