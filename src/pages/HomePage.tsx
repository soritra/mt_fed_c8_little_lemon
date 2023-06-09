import React from 'react';

import Main from '../components/Main';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Nav page='home' />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home;
