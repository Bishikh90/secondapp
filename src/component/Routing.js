import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Bookings from './Bookings';
import Hotels from './Hotels';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/bookings" element={<Bookings />}></Route>
                    <Route exact path="/hotels" element={<Hotels />}></Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;