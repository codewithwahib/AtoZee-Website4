import WhyChooseUs from "./Components/whychooseus";
import IndustriesServed from "./Components/industriesserved";
import Products from "./Components/product";
import Services from "./Components/services";
import TopBar from "./Components/topbar";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Workflow from "./Components/workflow";
import Hero from "@/app/Components/hero"


export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Products />
      <Workflow/>
      <Services />
      <WhyChooseUs />
       <IndustriesServed />
       <Footer />
    </div>
  );
}

