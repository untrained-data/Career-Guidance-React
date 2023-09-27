import React from 'react'
import "./hero.css"
import Heading from '../heading/Heading'
import {useNavigate} from "react-router"; 

export const Hero = () => {
  const navigate = useNavigate();

  const getStartedHandler = () => {
    navigate('/userform')
  }

  return (
    <>
    <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle='WELCOME TO CAREER LAUNCHER' title='Turning Ambitions into Achievements' />
            <div className="button">
              <button onClick={getStartedHandler}>
                GET STARTED NOW 
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}
