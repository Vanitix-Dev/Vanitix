import Navbar from "../app/components/sections/Navbar";
import Hero from "../app/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        {/* <Benefits /> */}
        {/* <CategorySection /> */}
        {/* <FeaturedProducts /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
