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
        <div className="container text-center">
          <div className="row booking-hero"></div>
          <div className="row row-header">
            <h3 className="col text-center py-3">Reservation</h3>
          </div>
          <section className="booking-form-wrap">
            <BookingForm />
          </section>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
