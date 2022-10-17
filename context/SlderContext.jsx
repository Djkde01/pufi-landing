import { useContext } from "react";

const SliderContext = useContext();

export function SliderContextProvider({ values, children }) {
  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
}

export default SliderContext;
