import React from 'react';
import image from '../images/home-cover.png';
import {useHistory} from "react-router-dom";


export default function Home(){

    const history = useHistory();

    function clickHandler(){
        history.push("/project")
    }

    return(

        <main>
            <img src = {image} alt = "pcb lines image" className ="absolute object-cover w-100 h-full"/>
            <section className = "relative flex  min-h-200 pt-10 lg:pt-50 px-8">
                <h1 className="text-xl font-bold leading-none lg:leading-snug home-name mb-10" >Namaste,</h1>
            

</section>

<div className="lg:pt-51 relative flex justify-left px-12  pr-4 text-3xl">
                  <text className=" w-1/2 h-full pr-5 ">Welcome, I am Sachin Giri. I am studying Electronics communication and Information student at Tribhuwan University, Institute of Engineering.{"\n"}
                  I am always eager to try and learn new things.

                      </text>

              

                   

                      
                </div>



                <div className="relative lg:pt-60 flex justify-center">
                    
            
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {clickHandler}>
               Know my Projects and Skills
            </button>
        </div>
           

           
        </main>

     

  
    )

}