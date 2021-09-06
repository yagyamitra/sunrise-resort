import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state={
        services:[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:'We will provide you free cocktails at your doorstep!!'
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:'We provide you endless tours of mountains and a lot of hiking!!'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:'We provide you free shuttle van for your use!!'
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:'We will provide you free strong beer at your doorstep!!'
        }
     ] 
    }
    render() {
        return (
            <section className="services">
               <Title title="services" />
            <div className="services-center">
            {this.state.services.map( (item, index) => {
               return <article key={index} className="service">
               <span>{item.icon}</span> 
               <h6>{item.title}</h6>
               <p>{item.info}</p>
                 </article>  
               
            })}

            </div>
            
            </section>
           
        )
    }
}
