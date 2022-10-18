import Head from "next/head";
import NavBarIcons from "../components/molecules/NavBarIcons/NavBarIcons";
import ItemList from "../components/organisms/ItemList/ItemList";
import Slider from "../components/organisms/Slider/Slider";
import { heroImages } from "../constants/constants";
import SliderContextProvider from "../context/SliderContext";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarIcons />
      <SliderContextProvider>
        <Slider items={heroImages} />
      </SliderContextProvider>

      <ItemList />
    </div>
  );
}
