import React from 'react';

import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

function OrderPage() {
  return (
    <>
      <Nav page='order' />
      <Main style={{ paddingBottom: '2rem' }}>
        <div className="container">Order Online</div>
      </Main>
      <Footer />
    </>
  );
}

export default OrderPage;
