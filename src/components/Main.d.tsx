import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    availabletimes?: Array<string>;
    setAvailableTimes?: Dispatch<SetStateAction<Array<string>>>;
  }
}
