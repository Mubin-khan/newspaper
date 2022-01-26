import React from 'react';
import Bbcnews from '../bbcnews/Bbcnews';
import Bitcoin from '../bitcoinnews/Bitcoin';
import Header from '../header/Header';
import Techcrunch from '../techcrunch/Techcrunch';
import Trumpnews from '../trumpnews/Trumpnews';

const Homepage = () => {
    return (
        <>
            <Header></Header>
            <Bbcnews></Bbcnews>
            <Trumpnews></Trumpnews>
            <Bitcoin></Bitcoin>
            <Techcrunch></Techcrunch>
        </>
    );
};

export default Homepage;