import React from 'react'
import wa from '../images/wa.svg'
import wb from '../images/wb.svg'
import wc from '../images/wc.svg'
const Home = () => {
    return (
        <>

        <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-10 mx-auto">
                <div class="row">
                    <div class="col-md-6 col-12 main_header_left">
                       
                        <p>welcome to Weather app</p>
                        <h1>get the latest <span class="txtt">weather</span> info of your city</h1>
                        <a href="/weather"><button>Check now</button></a>



                    </div>
                    <div class="col-md-6 col-12 main_header_right">
                       
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={wa} class=" edit w-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={wb} class="edit w-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={wc} class=" edit w-100 img-fluid" alt="..."/>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    </div>
        </>
        )
}

export default Home
