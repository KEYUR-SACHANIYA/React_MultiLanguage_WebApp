import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterSection from "../Components/FooterSection";
import NavbarSection from "../Components/NavbarSection";
import SpecificProductSection from "../Components/SpecificProductSection";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

const ProductDetailsPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = React.useState({});
    const {t} = useTranslation();
    const currentLanguageCode = cookie.get("i18next");
    useEffect(()=>{
        JSON.parse(t("productSection_products")).map((item) => {
            if(item.id == productId){
                setProduct(item);
            }
            return null;
        });
    },[currentLanguageCode]);

    return (
        <>
            <NavbarSection />
            <SpecificProductSection product={product}/>
            <FooterSection />
        </>
    );
}

export default ProductDetailsPage;