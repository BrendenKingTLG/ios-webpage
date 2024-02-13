import Image from "next/image";
import AppBar from "./Compenents/AppBar";
import HomeGrid from "./Compenents/HomeGrid";

export default function Home() {
  return (
    <main className="">
      <HomeGrid />
      <AppBar />
    </main>
  );
}
