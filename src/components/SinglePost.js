import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor (source){
    return builder.image(source)
}

export default function SinglePost(){

    const [singlePost, setsinglePost] = useState(null);

    const {slug}=useParams();

    useEffect(
        ()=>{
            sanityClient.fetch(` *[slug.current == "${slug}"]{

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
                    }
                
                },

            }
            `).then((data)=>setsinglePost(data[0]))
            .catch(console.error)

        },[slug]);

        if (!singlePost) return <div>Loading...</div>;

    return(

        <main className="bg-white min-h-screen p-10">
            <article className="container shadow-lg mx-auto bg-white rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full mt-20  flex items-center text-center justify-center ">
                        <div className="bg-white mt-40  w-full   bg-opacity-40 rounded p-2">
                            <h1 className="font-bold text-3xl lg:text-6xl mb-2">{singlePost.title}</h1>
                            <div className="flex justify-center mr-8 ml-8 mb-4 text-xl font-bold">
                                <p className="ml-2 mr-8">Completed on: {" "}{singlePost.date}</p>
                                <p className="ml-2 mr-8">Project Type: {" "}{singlePost.projectType}</p>
                                <p>Source:{" "}<a href={singlePost.link} target = "_blank"className="underline hover:text-blue-400">CLICK HERE</a></p>
                                

                            </div>
                            

                        </div>
                    </div>
                    <img src = {urlFor(singlePost.mainImage).url()}
                        alt={singlePost.title}
                        className = "w-full object-cover rounded-t"
                        style={{height: "400px"}}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl mx-w-full">
                    <BlockContent blocks={singlePost.body} projectId="2p3gqp3c" dataset="production"/>
                    </div>
            </article>
        </main>

    )
}