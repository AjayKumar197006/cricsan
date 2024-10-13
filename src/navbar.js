import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import React from 'react'
import Quiz from './Quiz.js'
import Home from './Home.js'
import Signin from './signin.js'
import Signup from './signup.js'
import './navbar.css'
import Stats from './Stats.js'



function Nav()
{
    return(

      <div className="container flex nav">
        <div><a href="/" className="logo">
            
            <h1>Cricsan</h1>
          </a>
        </div>
        <div className="menu">

              
               <ul className="flex">
                <li><a href="/" className="hover-links">Home</a></li>
                <li><a href="/Stats.js" className="hover-links">Stats</a></li>
                <li><a href="/quiz" className="hover-links">Quiz</a></li>
                <li><a href="/signin" className="hover-links secondary-button">Signin</a></li>
                <li><a href="/signup" className="hover-links primary-button">Signup</a></li>
               </ul>
              
              
               
        </div>
      </div>
             
            
            
            
         
       

    )
    

}

export default Nav