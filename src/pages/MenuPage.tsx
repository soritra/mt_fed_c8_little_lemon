import React from 'react';

import Nav from '../components/Nav';
import Main from '../components/Main';
import Specials from '../components/Specials';
import Footer from '../components/Footer';

const page = 'menu';

function MenuPage() {
  return (
    <>
      <Nav page={page} />
      <Main style={{ paddingBottom: '2rem' }}>
        <Specials page={page} />
      </Main>
      <Footer />
    </>
  );
}

export default MenuPage;
