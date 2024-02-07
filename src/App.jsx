// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="basics" element={<div>basics</div>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;