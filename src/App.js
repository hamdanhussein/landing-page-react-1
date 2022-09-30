import Footer from './components/Footer/Footer';
import Contacts from './components/Contact/Contacts';
import Service from './components/Section/Service/Service';
import Feature from './components/Section/Feature/Feature';
import Intro from './components/Hero/Intro';
import Navbar from './components/Nav/Navbar';
import GlobalStyle from './components/Styles/Global.styled';
import { SectionContainer } from './components/Styles/SectionContainer.styled';
import {
  ServiceShape,
  FeatureShape,
  IntroShape,
  PriceShape,
} from './components/Styles/Shape.styled';
import Price from './components/Section/Price/Price';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  }, [width]);

  //DETECT SCREEN SIZE FOR MEDIA QUERY
  // const smallScreen  = window.screen.width <= 768 ? true : false;

  return (
    <div>
      <GlobalStyle />

      <Navbar />

      <SectionContainer>
        <Intro />
        <IntroShape />
      </SectionContainer>
      <SectionContainer id='feature'>
        <Feature />
        <FeatureShape />
      </SectionContainer>
      <SectionContainer id='services'>
        <Service />
        {!width && <ServiceShape />}
      </SectionContainer>
      <SectionContainer id='pricing'>
        <Price />
        <PriceShape />
      </SectionContainer>
      <SectionContainer id='contacts'>
        <Contacts />
      </SectionContainer>

      <Footer />
    </div>
  );
}

export default App;
