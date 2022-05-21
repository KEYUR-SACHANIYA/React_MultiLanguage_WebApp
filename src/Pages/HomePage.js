import React from "react";
import AboutUsSection from "../Components/AboutUsSection";
import ContactUsSection from "../Components/ContactUsSection";
import FooterSection from "../Components/FooterSection";
import ImageGallary from "../Components/ImageGallery";
import MainSection from "../Components/MainSection";
import NavbarSection from "../Components/NavbarSection";
import ProductSection from "../Components/ProductSection";
const HomePage = () => {
    return (
        <>
            <NavbarSection />
            <MainSection />
            <ProductSection />
            <AboutUsSection />
            <ImageGallary />
            <ContactUsSection />
            <FooterSection />
        </>
    );
}

export default HomePage;