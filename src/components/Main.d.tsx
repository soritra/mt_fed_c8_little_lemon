import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    availableTimes?: Array<string>;
    setAvailableTimes?: Dispatch<SetStateAction<Array<string>>>;
  }
}
