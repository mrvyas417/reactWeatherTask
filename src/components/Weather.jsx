import React, { useState ,useEffect}
from 'react'

const Weather = () => {
    const [check,setcheck]=useState(true);
    const [name,setname]=useState(null);
    const [staus,setstatus]=useState('Clear');
    const [city ,setcity]=useState(null);
    const [search,setsearch]=useState('pune');
    useEffect(()=>{
        const fetchapi = async ()=>{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=463f01310c9adfd012779a0da0f2287e`
            const response =await fetch(url);
           
            const resJson= await response.json();
            //   console.log(resJson);
            setcity(resJson.main);

            if(resJson.weather){
                setstatus(resJson.weather[0].main);
            }
            if(resJson){
                setname(resJson.name)
            }
           
           
        } 

        fetchapi();

    },[check] )
    return (
        
        <>
        
        
          <div className="container-fluid">
        <div className="row">
            <div className="col-md-10 col-10 mx-auto">
            
                <div className="main_contentw">
                        <div className="from_temp">
                            <input onChange={(e)=>{
                                setsearch(e.target.value)

                            }} type="text" id="cityName" placeholder="Enter your city name" autoComplete="off" />
                            <input onClick={()=>{
                                setcheck(!check);
                            }} type="submit"    
                             id="submitBtn" />
                        </div>
                         </div>
                         <div className="tempratureInfo">
                             <div className="top_layer">
                                 <p id="day">Monday</p>
                                 <p id="Today_date">5s JUL</p>
                                 </div>
                                 {!city ? (
                                     <p> no data found </p>
                                     ) :(
                                         <div className="main_layer ">
                                     <p id="city_name">{name}</p>
                                     <div className="middle_layer data_hide">
                                         <p id="temp" >{city.temp}</p>
                                         <p id="temp_status">
                                         {
                                            staus=="Clouds" && <i class='fas  fa-cloud' style={{color: '#f1f2f6'}}></i>
                                         }
                                            {
                                            staus=="Rain" && <i class='fas  fa-cloud-rain' style={{color: '#a4b0be'}}></i>
                                         }
                                          {
                                            staus=="Clear" && <i class='fas  fa-cloud-rain' style={{color: '#eccc68'}}></i>
                                         }
                                        
                        {/* <i aria-hidden="true" className="fas fa-cloud"></i> */}
                        </p>


                                     </div>

                                 </div>

                                     )}
                                 

                         </div>
                  


               

            </div>

        </div>

    </div>
    <br/>
            
        </>
    )
}

export default Weather
