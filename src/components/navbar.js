import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/business">Business <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/sports">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/entertainment">Entertainment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/technology">Technology</a>
                                <a class="dropdown-item" href="/sports">Sports</a>
                                <a class="dropdown-item" href="/entenament">Entenament</a>
                                <a class="dropdown-item" href="/business">Business</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/business">Business</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="/technology">Technology</a></li>
                                    <li><a class="dropdown-item" href="/sports">Sports</a></li>
                                    <li><a class="dropdown-item" href="/entenament">Entenament</a></li>
                                    <li><a class="dropdown-item" href="/business">Business</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar;
