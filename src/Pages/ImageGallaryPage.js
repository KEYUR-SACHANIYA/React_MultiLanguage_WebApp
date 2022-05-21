import React from "react";
import FooterSection from "../Components/FooterSection";
import ImageGallary from "../Components/ImageGallery";
import NavbarSection from "../Components/NavbarSection";

const ImageGallaryPage = () => {
    return (
        <>
            <NavbarSection />
            <ImageGallary />
            <FooterSection />
        </>
    );
}

export default ImageGallaryPage;