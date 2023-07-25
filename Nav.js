import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const[show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, []);

  return (
    <div className= {`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
        <img 
        className="nav__logo"
        src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png' 
        alt='Netflix Logo' 
        />
        <img 
        className="nav__avatar"
        src='data:image/png;base64,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' 
        alt='Netflix Avatar'
        />
        </div>
        {/* <h1>This is the Nav</h1> */}
    </div>
  )
}

export default Nav