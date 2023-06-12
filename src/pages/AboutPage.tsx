import React from 'react';

import Nav from '../components/Nav';
import Main from '../components/Main';
import About from '../components/About';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <Nav page='about' />
      <Main>
        <div className="container text-center">
          <div className="row about-header"></div>
        </div>
      </Main>
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
