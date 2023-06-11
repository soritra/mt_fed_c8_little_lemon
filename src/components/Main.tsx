import React, { ReactNode, CSSProperties, useState } from 'react';

import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';


const allSlots = Array.from({ length: 6 }, (val, k) => `${17 + k}:00`);

interface MainProps extends React.ComponentPropsWithRef<'main'> {
  children?: ReactNode,
  style?: CSSProperties
}

function Main({children, style}: MainProps) {
  const [availableTimes, setAvailableTimes] = useState(allSlots);

  if (children) {
    return (
      <main style={style} availabletimes={availableTimes}>
        {children}
      </main>
    )
  }
  return (
    <main>
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
