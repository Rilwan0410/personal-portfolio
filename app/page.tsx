import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Connect";
import Map from "@/components/Map";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
    return (
        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
            {/* Nav */}
            <Navigation />

            {/* Sections */}
            <div className="lg:w-3/4 space-y-6 pb-12">
                {/* About */}
                <About />

                {/* Portfolio */}
                <Portfolio />

                {/* Services */}
                {/* <Services /> */}

                {/* Testimonial */}
                {/* <Testimonial /> */}

                {/* Resume */}
                <Resume />

                {/* Clients */}
                {/* <Clients /> */}

                {/* Blog */}
                {/* <Blog /> */}

                {/* Contact */}
                <Contact />

                {/* Map */}
                {/* <Map /> */}
            </div>
        </div>
    );
}
