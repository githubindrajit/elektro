import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoryHome from '../components/CategoryHome';
import BestSellingHome from '../components/BestSellingHome';
import HomeBanner2 from '../components/HomeBanner2';

// import FeaturedHome from '../components/FeaturedHome';
import HighFashionHome from '../components/HighFashionHome';
import NewsletterHome from '../components/NewsletterHome';
// import EvaIntroHome from '../components/EvaIntroHome';
import InstagramHome from '../components/InstagramHome';
// import InfoHome from '../components/InfoHome';
// import CollectionHome from '../components/CollectionHome';
import HomeBanner3 from '../components/HomeBanner3';


const Home = () => {
  return (
    <>

<HeroCarousel />

<CategoryHome />

<BestSellingHome />

{/* <HomeBanner3 /> */}

{/* <FeaturedHome /> */}

 <HighFashionHome />

 <HomeBanner2 />

{/*<InfoHome />

<CollectionHome />

<EvaIntroHome /> */}

<InstagramHome />

<NewsletterHome />








    </>


  );
};

export default Home;
