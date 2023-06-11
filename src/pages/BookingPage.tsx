import React from 'react';

import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';


function BookingPage() {

  return (
    <>
      <Nav page='reservation' />
      <Main>
        <div className="container text-center py-4">
          <div className="row row-header">
            <h3 className="col text-center py-3">Reservation</h3>
          </div>
          <section style={{ maxWidth: 'fit-content', margin: '0 auto' }}>
            <BookingForm />
          </section>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
