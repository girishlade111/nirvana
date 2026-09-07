import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Retreats from "@/components/Retreats";
import SpaBanner from "@/components/SpaBanner";
import SplitSection from "@/components/SplitSection";
import ExploreNature from "@/components/ExploreNature";
import AdventureCta from "@/components/AdventureCta";
import Testimonials from "@/components/Testimonials";
import FeaturedIn from "@/components/FeaturedIn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Introduction />
      <Retreats />
      <SpaBanner />
      <SplitSection
        id="relax"
        title="Rest &amp; Relax"
        subtitle="Wellness"
        paragraph="Every now and then go away, have a little relaxation, for when you come back to your work your judgment will be surer. Go some distance away because then the work appears smaller."
        cta="Learn More"
        ctaHref="#"
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=85"
        imageLabel="Luxury spa treatment room"
      />
      <ExploreNature />
      <SplitSection
        title="Organic Cuisine"
        subtitle="Farm to Table"
        paragraph="Nature has always cared for us. So why not taking that care? Come to Nirvana and taste our organic cuisine today. Organic foods may have higher nutritional value."
        cta="Learn More"
        ctaHref="#"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=85"
        imageLabel="Organic cuisine dining"
        reversed
      />
      <AdventureCta />
      <Testimonials />
      <FeaturedIn />
      <Footer />
    </>
  );
}
