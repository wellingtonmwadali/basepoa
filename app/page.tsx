import Hero from "@/components/sections/Hero";
import CategoryLinks from "@/components/sections/CategoryLinks";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import RestaurantsSection from "@/components/sections/RestaurantsSection";
import AccommodationsSection from "@/components/sections/AccommodationsSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import MembershipBanner from "@/components/sections/MembershipBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryLinks />
      <ActivitiesSection />
      <RestaurantsSection />
      <AccommodationsSection />
      <DestinationsSection />
      <MembershipBanner />
    </>
  );
}
