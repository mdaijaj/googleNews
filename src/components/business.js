import React, { useState, useEffect } from 'react'
import '../App.css';
const cors = require('cors')
const axios = require('axios')



const Business = () => {
    const apiKey = "2f35351b15a94b7bab667e5b6f19f560";
    const country="us"
    const category="business"
    const baseUrl = `https://newsapi.org/v2/top-headlines`
    const [userData, setData] = useState([]);

    const businessPage = async () => {
        axios.get(`${baseUrl}?country=${country}&category=${category}&apiKey=${apiKey}`)
        .then((res) => {
            let data = res.data.articles
            console.log("data", data)
            setData(data);
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        businessPage();
    });

    let imgpro={
        height: "250px",
        width: "320px",
    }

    return (
        <>
        <div className="container">
            <center><h1>Business page</h1></center>
            <div className="card-columns">
            {
                userData.map((element => {

                    return(
                        <>
                        <div className="card bg-info">
                            <div className="card-body text-center">
                                <img src={element.urlToImage} style={imgpro} />
                                <a href={element.url}><h2 className="card-text">{element.title}</h2></a>
                                <p className="card-text">{element.description}</p>
                                <p className="card-text">{element.publishedAt}</p>
                            </div>
                        </div>
                       
                      </>
                        
                    )
                }))
            }
            </div>
        </div>
        </>
    )
}


export default Business;