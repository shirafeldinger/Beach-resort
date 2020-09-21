import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Welcome to the house of fun, we have plenty of beer"
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:"Welcome to the house of fun, we have plenty of beer"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"Welcome to the house of fun, we have plenty of beer"
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"Welcome to the house of fun, we have plenty of beer"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <div>
                    <Title title="services"/>
                    <div className="services-center">
                        {this.state.services.map((item, index)=>{
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </div>
            </section>
            
        )
    }
}
