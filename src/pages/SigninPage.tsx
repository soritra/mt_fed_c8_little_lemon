import React from 'react';

import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

function SigninPage() {
  return (
    <>
      <Nav page='login' />
      <Main style={{ paddingBottom: '2rem' }}>
        <div className="container">Sign In</div>
      </Main>
      <Footer />
    </>
  );
}

export default SigninPage;
