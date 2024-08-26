import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { DealsCard } from "../AllData/Data";
import AddressReview from "../components/SectionComponent/AdressReviewCard";
import Product from "../components/SectionComponent/Product";
import PaymentMode from "../components/SectionComponent//PaymentMode";
import CardSlider from "../components/CardComponent/CardSlider";
import Services from "../components/SectionComponent/Services";

const MainPage = () => {
  return (
    <>
      <Header />
      <AddressReview />
      <CardSlider data={DealsCard} secondCard={true} />
      <Services />
      <Product />
      <PaymentMode />
      <Footer />
    </>
  );
};

export default MainPage;
