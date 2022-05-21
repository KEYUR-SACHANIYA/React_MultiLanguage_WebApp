import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPage from "./Pages/ContactUsPage"
import ProductPage from "./Pages/ProductPage"
import ImageGallaryPage from "./Pages/ImageGallaryPage"
import ProductDetailsPage from "./Pages/ProductDetailsPage";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/about" exact element={<AboutUsPage />}></Route>
                        <Route path="/contact" exact element={<ContactUsPage />}></Route>
                        <Route path="/product" exact element={<ProductPage />}></Route>
                        <Route path="/images" exact element={<ImageGallaryPage />}></Route>
                        <Route path="/product/:productId" exact element={ <ProductDetailsPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;