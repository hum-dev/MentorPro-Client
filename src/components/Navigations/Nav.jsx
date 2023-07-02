import {NavContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, NavbarButton,NavbarLinkExtended,NavbarLinkRight } from './Nav.style'
import logo from '../../assets/images/M logo.png'
import prof from '../../assets/images/OIP.jpeg'
import { useState, useContext } from "react";
import {FaHome, FaSignOutAlt} from 'react-icons/fa'
import {FcAbout, FcBusinessContact} from 'react-icons/fc'
import {LuHelpingHand} from 'react-icons/lu'
import { Context } from "../Context/userContext/Context";

function Nav() {
    const [extendNavbar, setExtendNavbar] = useState(false)

    const { dispatch} = useContext(Context)
    const handleLogout = () => {
      dispatch({type: "LOGOUT"})
      
    };

  return (
    <NavContainer extendNavbar={extendNavbar} >
        <NavbarInnerContainer>

                <LeftContainer>
                <img src={logo} alt="" className="logo" />
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer> 
                   
                      <NavbarLink to='/Home'> <FaHome className='icon' />Home</NavbarLink>
                      <NavbarLink to='/About'><FcAbout  className='icon'/> About</NavbarLink>
                       <NavbarLink to='/Mentor'> <LuHelpingHand  className='icon'/> Mentors</NavbarLink>
                       <NavbarLink to='/Mentee'> < LuHelpingHand  className='icon'/> Mentees</NavbarLink>
                     {/* <li className="landing-nav-header-list--item active"><NavbarLink to='/Profile'><GrResources className='icon'/> Profile</NavbarLink></li> */}
                      <NavbarLink to='/Contact'> <FcBusinessContact  className='icon'/> Contact</NavbarLink>
                      {/* <li className="landing-nav-header-list--item active"><NavbarLink to='/Admin'>  Admin</NavbarLink></li> */}
                 
             
            <NavbarLinkRight>
                    <NavbarLink to='/Profile'className="profile" > <img  src={prof} alt="" /> </NavbarLink>
                    <NavbarLink to='/' onClick={handleLogout} className="landing-nav-btn-hero landing-nav-btn-pri nav-link"> <FaSignOutAlt  className='icon' /> sign out </NavbarLink>
            </NavbarLinkRight>
                    </NavbarLinkContainer>
                    <NavbarButton onClick={() => {
                        setExtendNavbar(!extendNavbar);
                    }} >
                        {extendNavbar ? <>&#10005; </> : <> &#8801; </>}
                        
                    </NavbarButton>
                </RightContainer>

        </NavbarInnerContainer>
         {  extendNavbar &&
        <NavbarExtendedContainer>
        
                       <NavbarLinkExtended to='/Home'> <FaHome className='icon' />Home</NavbarLinkExtended>
                     <NavbarLinkExtended to='/About'><FcAbout  className='icon'/> About</NavbarLinkExtended>
                     <NavbarLinkExtended to='/Mentor'> <LuHelpingHand  className='icon'/> Mentors</NavbarLinkExtended>
                     <NavbarLinkExtended to='/Mentee'> < LuHelpingHand  className='icon'/> Mentees</NavbarLinkExtended>
                     {/* <li className="landing-nav-header-list--item active"><NavbarLink to='/Profile'><GrResources className='icon'/> Profile</NavbarLink></li> */}
                     <NavbarLinkExtended to='/Contact'> <FcBusinessContact  className='icon'/> Contact</NavbarLinkExtended>
                      {/* <li className="landing-nav-header-list--item active"><NavbarLink to='/Admin'>  Admin</NavbarLink></li> */}
                   
              
                  
                    <NavbarLinkExtended to='/Profile'className="profile" > <img  src={prof} alt="" /> </NavbarLinkExtended>
                    <NavbarLinkExtended to='/' onClick={handleLogout} className="landing-nav-btn-hero landing-nav-btn-pri"> <FaSignOutAlt  className='icon' /> sign out </NavbarLinkExtended>
                   

        </NavbarExtendedContainer>
        }
    </NavContainer>
  )
}

export default Nav
