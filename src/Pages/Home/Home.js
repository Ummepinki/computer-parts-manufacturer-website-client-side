import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import ComputerSystem from './ComputerSystem';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <ComputerSystem></ComputerSystem>

            <Footer></Footer>
        </div>
    );
};

export default Home;