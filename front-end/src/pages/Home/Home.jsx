import withRoot from 'pages/Home/withRoot';
import React from 'react';
import ProductCategories from 'pages/Home/views/ProductCategories';
import ProductSmokingHero from 'pages/Home/views/ProductSmokingHero';
import AppFooter from 'pages/Home/views/AppFooter';
import ProductHero from 'pages/Home/views/ProductHero';
import ProductValues from 'pages/Home/views/ProductValues';
import ProductHowItWorks from 'pages/Home/views/ProductHowItWorks';
import ProductCTA from 'pages/Home/views/ProductCTA';
import AppAppBar from 'pages/Home/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);