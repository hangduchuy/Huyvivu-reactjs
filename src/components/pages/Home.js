import React from 'react';
import '../../App.scss';
import Cards from '../Cards/Cards';
import HeroSection from '../Panner/HeroSection';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import CardsDes from '../Cards/CardDes';
import CardWhy from '../Cards/CardWhy';
import CardRead from '../Cards/CardRead';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsDes />
      <Cards />
      <CardWhy />
      <CardRead />
      <Footer />
    </>
  );
}

export default Home;
