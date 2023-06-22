import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { TopNavigation } from './components/topnav';
// import { HomePage } from './components/HomePage/homepage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <head>
        <link href='https://fonts.googleapis.com/css?family=Limelight' rel='stylesheet'></link>
        <title>Pranay Website</title>        
    </head>
    <body>
        <div className='text-[10rem] text-[black]'>
            <TopNavigation />
        </div>
        <BrowserRouter>
            <Routes>
            </Routes>
        </BrowserRouter>
    </body>
        
    </>
    
);