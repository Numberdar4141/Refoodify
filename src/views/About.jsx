import React from 'react'
import Hero from "./Hero"
import ngo2 from "../assets/Op1.png"
import FadeIn from '../components/FadeIn'
import Aboutget from "./Aboutget"
import Care from "./Care"
import Footer from './Footer'
export default function About() {
  return (
    <div>
      <Hero/>
      <Aboutget/>
      <Care/>


      <div >
        <div>
        <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-4 text-black max-w-[1050px]">
        Our Partners
        </h1>
      </FadeIn>  
        </div>
        <FadeIn delay={0.2} direction="down" padding fullWidth >
        <img src={ngo2} alt="" />

        </FadeIn>
      </div>
      <Footer/>
    </div>
  )
}
