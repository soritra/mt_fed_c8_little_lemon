import React from 'react';

import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <Nav page='about' />
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
