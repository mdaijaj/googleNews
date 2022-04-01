import React, { useState, useEffect } from 'react'
import '../App.css';
const cors = require('cors')
const axios = require('axios')


const About = () => {
    // const apiKey = "2f35351b15a94b7bab667e5b6f19f560";
    // const country = "us";
    // const baseUrl = `https://newsapi.org/v2/top-headlines?${country}=us&apiKey${apiKey}`
    const headlineUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f35351b15a94b7bab667e5b6f19f560";

    const userHome = async () => {
        axios.get(`${headlineUrl}`)
            .then((res) => {
                let data = res.data.articles;
                console.log("data", data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        userHome();
    }, []);

    return (
        <>
        <h2> About pages</h2>
        <div className="container">
        </div>
        </>
    )
}


export default About;