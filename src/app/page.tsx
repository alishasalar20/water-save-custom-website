import Image from "next/image";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Method from "./components/Method";

export default function Home() {
  return (
 <div>
  <Hero />
  <Info />
  <Method />
 </div>
  );
}
