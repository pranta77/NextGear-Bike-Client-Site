import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import Products from "../HomeAllProducts/Products/Products";
import BottomBanner from "../BottomBanner/BottomBanner";
import HomeReview from "../HomeReview/HomeReview";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomeBanner />
      <Products />
      <HomeReview />
      <BottomBanner />
      <Footer />
    </div>
  );
}
