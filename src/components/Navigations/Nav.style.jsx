import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
width : 100%;
height : ${(props )=> (props.extendNavbar ? '100vh' : '80px')};
/* box-shadow : 0 0 10px rgba(0,0,0,0.1); */
margin-top : 5rem;
display : flex;
/* justify-content : space-between; */
margin-right : 0;
flex-direction : column;

@media screen and (min-width : 700px){
    height : 80px;
}

`;
export const LeftContainer = styled.div`
flex : 5%;
display : flex;
height : 110%;
/* background : #fff; */

` ;

export const RightContainer = styled.div`
flex : 95%;
display : flex;
/* justify-content : space-between; */
align-items : center;


` ;

export const NavbarInnerContainer= styled.div`
width : 100%;
height : 80px;
display : flex;
`;

export const NavbarLinkContainer = styled.div`
display : flex;
align-items : center;



`;

export const NavbarLink = styled(Link)`
text-decoration : none;
font-size : 2rem;
color : #000;
margin-right : 5px;
display : flex;
align-items : center;
font-weight : 500;

transition : all 0.3s ease-in-out;
&:hover{
    border-bottom: 2px solid var(--color-white);

}

@media  (max-width : 700px){
        display : none;
    }
`;

export const NavbarLinkRight = styled(Link)`
display : flex;
align-items : center;
text-decoration : none;
font-size : 1rem;
font-size : 1.8rem;

& .profile {
    border: 1px solid var(--color-white);
    border-radius: 50%;
    width: 70px;
    height: 70px;
}

& .profile img{
     width: 100%; 
    height: 100%; 
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid var(--color-white);
}

& .nav-link {
    padding : .5rem;
    border: 2px solid white;
    margin: 1rem;
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    z-index: 2;
    transition: all .5s ease;
}
& .nav-link:hover {
    color: var(--color-secondary);
}

& .nav-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 0;
    background-color: var(--color-white);
    z-index: -1;
    transition: all .5s ease;
}

& .nav-link:hover::after {
    height: 101%;
}

`;

export const NavbarLinkExtended = styled(Link)`
text-decoration : none;
font-size : 1.7rem;
color : #000;
margin-right : 10px;

font-weight : 500;
font-family : 'Roboto', sans-serif;
transition : all 0.3s ease-in-out;
&:hover{
    color : #fff;

}
`;

export const LogoContainer = styled.img`
margin:10px;
max-width : 180px;
height : auto;
`;

export const NavbarButton = styled.button`
width : 70px;
height : 50px;
border : none;
outline : none;
background : none;
cursor : pointer;
font-size : 45px;
align-items : center;
color : #000;

@media screen and (min-width : 700px){
    display : none;

}
`;


export const NavbarExtendedContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
gap : 20px;

@media screen and (min-width : 700px){
    display : none;

}

`;