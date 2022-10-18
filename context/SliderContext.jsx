import { createContext, useMemo, useState } from "react";

export const SliderContext = createContext({});

export default function SliderContextProvider({ children }) {
  const [slideNumber, setSlideNumber] = useState(0);

  const value = useMemo(() => ({ slideNumber, setSlideNumber }), [slideNumber]);
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
}
