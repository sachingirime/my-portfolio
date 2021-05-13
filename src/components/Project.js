import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";

import sanityClient from '../client.js';

export default function Project(){

    const [projectData, setprojectData] = useState(null)

useEffect(
    ()=>{
   sanityClient.fetch(`*[_type == "project"]{
    title,
    date,
    place,
    body,
    slug,
    projectType,
    link,
    tags,
    mainImage{
        asset->{
            _id,
            url
        },
        alt,
    },
}`).then((data)=>setprojectData(data))
    .catch(console.error)
},[]);

return (

    <main className="bg-white min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className='text-5xl flex justify-center  font-bold mb-12'>My Projects</h1>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {projectData && projectData.map((project,index)=>(

                <article>
                    <Link to = {"/project/" + project.slug.current} key = {project.slug.current}>
                    <span className = "block h-64 relative rounded shadow leading-snug bg-white border-2  border-blue-500 " key ={index} >
                        <img src = {project.mainImage.asset.url} alt = {project.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                        <span className = "block relative h-full flex justify-center items-end ">
                            <h3 className=" text-lg font-bold  px-3 py-6 w-full bg-blue-500 bg-opacity-90 text-black  text-center hover:text-white  ">{project.title}</h3>
                        </span>
                    </span>
                    </Link>
                </article>
                ))}
            </div>
        </section>
    </main>


        
)

}






