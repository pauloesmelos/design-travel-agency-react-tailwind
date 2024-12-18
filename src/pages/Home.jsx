import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Destinations from '../components/destinations/Destinations';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Paradises from '../components/paradises/Paradises';
import Search from '../components/search/Search';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Paradises />
      <Search />
      <Carousel />
      <Footer />
    </div>
  )
}

export default Home;