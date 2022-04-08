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
    }, []);

    let imgpro={
        height: "250px",
        width: "320px",
    }

    return (
        <>
        <center><h1>Business page</h1></center>
        <div class="row row-cols-2 row.d-flex row-cols-md-4 g-4">
                {
                    userData.map((element => {
                        return (
                            <div class="col">
                                <div class="card h-60">
                                    <img src={element.urlToImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">{element.author}</h3>
                                        <a href={element.url}><p1 class="card-text">{element.title}</p1></a>
                                        <p class="card-text">{element.description}</p>
                                        <p class="card-text">{element.content}</p>
                                        <p1 class="card-text1">{element.publishedAt}</p1>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </>
    )
}


export default Business;