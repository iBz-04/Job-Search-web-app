import Featured_jobs from "../components/Featured_jobs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommended_jobs from "../components/Recommended_jobs";
import Top_company from "../components/Top_company";
import Why_customers from "../components/Why_customers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recommended_jobs />
      <Top_company />
      <Featured_jobs />
      <Why_customers />
      <Footer />
    </div>
  );
}
