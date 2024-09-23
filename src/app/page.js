import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowWorks from "@/components/HowWorks";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";

export default function Home() {
    return (
        <>
            <Hero/>
            <Stats/>
            <HowWorks/>
            <FeaturedProjects/>
            <Contacts/>
            <Brands/>
        </>
    );
}
