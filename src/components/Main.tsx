import React, { ReactNode, CSSProperties, useState } from 'react';

import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';


// interface MainProps {
//   children?: ReactNode,
//   style?: CSSProperties
// }

// interface MainProps {
//   availableTimes?: Array<string>
// }

// type MainProps = {
//   availableTimes?: Array<string>;
//   children?: ReactNode;
// };

// // our Button component
// const Main2 = ({ availableTimes, children }: MainProps) => {
//   return <main availableTimes={availableTimes}>{children}</main>;
// }

// type MainProps = JSX.IntrinsicElements["main"] & {
//   readonly availableTimes?: Array<string>;
// };

const allSlots = Array.from({ length: 6 }, (val, k) => `${17 + k}:00`);

// const MainComp: React.FunctionComponent<MainProps> = ({children, style, ...rest}) => {
//   return (
//     <main style={style} {...rest} availableTimes={availableTimes}>
//       {children}
//     </main>
//   );
// };

// const Main2: FC<MainProps> = ({ availableTimes = [], ...props }) => (
//   <main
//     availableTimes={availableTimes}
//     {...props}
//   />
// );

// declare module 'react' {
//   interface HTMLProps<T> {
//     availableTimes?: Array<string>;
//  }

// }

// const Main = ({ as: Component = 'main', ...rest }) => {
//   const [availableTimes, setAvailableTimes] = useState(allSlots);

//   if (JSON.stringify(rest) != '{}') {
//     return <Component {...rest} />;
//   }
//   return (
//     <main>
//       <Specials />
//       <Testimonials />
//       <About />
//     </main>
//   );
// };

interface MainProps extends React.ComponentPropsWithRef<'main'> {
  children?: ReactNode,
  style?: CSSProperties
}

function Main({children, style}: MainProps) {
  const [availableTimes, setAvailableTimes] = useState(allSlots);

  if (children) {
    return (
      <main style={style} availableTimes={availableTimes}>
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
