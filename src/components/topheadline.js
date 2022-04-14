import React, { useState, useEffect } from 'react'
import '../App.css';
// import Footer from './footer';
import axios from 'axios';



const TopHeadline = () => {
    const apiKey = "2f35351b15a94b7bab667e5b6f19f560";
    const country = "us";
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=2f35351b15a94b7bab667e5b6f19f560
    const baseUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    // const headlineUrl = "https://jsonplaceholder.typicode.com/users";
    const [userData, setData] = useState([]);

    const userHome = async () => {
        axios.get(`${baseUrl}`)
        .then((res) => {

            //json data
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
        userHome();
    });

    let imgpro={
        height: "250px",
        width: "300px"
    }

    return (
        <>

        <div className="container">
            <center><h2>News of World Top Headlines</h2></center>
            <div className="card-columns">
            {
                userData.map((element => {

                    return(
                        <div className="card bg-info">
                            <div className="card-body text-center">
                                <img src={element.urlToImage} style={imgpro} alt="not found url" />
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


export default TopHeadline;