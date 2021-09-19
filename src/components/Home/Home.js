import React from 'react'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import SliderTop from '../Slider/SliderTop'

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <SliderTop/>
             <Main/>
            <Footer/>
        </div>
    )
}
