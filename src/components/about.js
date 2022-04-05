import React, { useState, useEffect } from 'react'
import '../App.css';
const cors = require('cors')
const axios = require('axios')



const Sports = () => {
    const apiKey = "2f35351b15a94b7bab667e5b6f19f560";
    const country = "us"
    const category = "sports"
    const baseUrl = `https://newsapi.org/v2/top-headlines`
    const [userData, setData] = useState([]);

    const sportPage = async () => {
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
        sportPage();
    });

    let imgpro = {
        height: "250px",
        width: "300px"
    }

    // {
    //     userData.map((element => {
    //         return (
    //             <>
    //                 <div class="card">
    //                     <img src={element.urlToImage} class="card-img-top" alt="..." />
    //                     <div class="card-body">
    //                         <h5 class="card-title">{element.url}</h5>
    //                         <p class="card-text">{element.description}</p>
    //                     </div>
    //                     <div class="card-footer">
    //                         <small class="text-muted">{element.publishedAt}</small>
    //                     </div>
    //                 </div>

    //             </>
    //         )
    //     }))
    // }

    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    userData.map((element => {
                        return (
                            <div class="col">
                                <div class="card h-50">
                                    <img src={element.urlToImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{element.author}</h5>
                                        <p class="card-text">{element.content}</p>
                                       {/* <a href={element.url}></a> <p class="card-text">{}</p> */}

                                        <p class="card-text">{element.description}</p>
                                        <p class="card-text">{element.publishedAt}</p>

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


export default Sports;