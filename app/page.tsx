import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Product from "./sections/Product";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Product />
        {/* <Benefits /> */}
        {/* <CategorySection /> */}
        {/* <FeaturedProducts /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
