import HeroSection from "@/components/Home/HeroSection";
import Overview from "@/components/Home/Overview";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return ( 
      <Layout>
        <HeroSection />
        <Overview ></Overview>
      </Layout>
 
  );
}
