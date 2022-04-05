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

    return (
        <>
        <div class="row row-cols-1 row-cols-md-5 g-6">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>          
        </>
    )
}


export default Sports;