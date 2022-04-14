import React, { useState, useEffect } from 'react'
import '../App.css';
// const cors = require('cors')
const axios = require('axios')



const Entertainment = () => {
    const apiKey = "2f35351b15a94b7bab667e5b6f19f560";
    const country="us"
    const category="technology"
    const baseUrl = `https://newsapi.org/v2/top-headlines`
    const [userData, setData] = useState([]);

    const technologyPage = async () => {
        axios.get(`${baseUrl}?country=${country}&category=${category}&apiKey=${apiKey}`)
        .then((res) => {

            // //json data
            // console.log(res.data)
            // const data= res.data
            // setData(data)

            // google api data
            let data = res.data.articles
            console.log("data", data)
            setData(data);
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        technologyPage();
    });

    let imgpro={
        height: "250px",
        width: "300px"
    }

    return (
        <>
        <div className="container">
            <center><h1>Technology page</h1></center>
            <div className="card-columns">
            {
                userData.map((element => {

                    return(
                        <div className="card bg-info">
                            <div className="card-body text-center">
                                <img src={element.urlToImage} alt="not find image url" style={imgpro} />
                                <strong><a href={element.url}><p className="card-text">{element.title}</p></a></strong>
                                <p className="card-text">{element.description}</p>
                                <p className="card-text">{element.publishedAt}</p>
                            </div>
                        </div>
                    )
                }))
            }
            </div>
        </div>
        </>
    )
}


export default Entertainment;