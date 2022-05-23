import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OverlayImg from './OverlayImg';
import Parts from './Parts';
import Reviews from './Reviews';
import Transactions from './Transaction';

const Home = () => {
    return (
      <div>
          
        <Banner></Banner>
        <Parts></Parts>
        <BusinessSummary></BusinessSummary>
        <Reviews></Reviews>
        <Transactions></Transactions>
        <OverlayImg></OverlayImg>
        </div>
    );
};

export default Home;