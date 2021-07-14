import React from 'react'
import h from '../images/h1.png'

const About = () => {
    return (
        <>
         <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-10 mx-auto">
                <div class="row">
                    <div class="col-md-6 col-12 main_header_right align-items-center">
                        
                        <figure>
                            <img src={h} class="img-fluid" alt="shubhu" title="a boy how alive"/>
                        </figure>

                    </div>
                    <div class="col-md-6 col-12 main_header_left">
                        
                        <p>welcome to Weather app</p>
                        <h1>I am a <span class="txtt">MERN stack devloper

                            </span> ,computer science student </h1>
                        <a target="_shubhu" href="https://www.instagram.com/shubh.vyas/"><button>About me</button></a>



                    </div>



                </div>

            </div>

        </div>
        </div>

            
        </>
    )
}

export default About
