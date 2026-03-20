import AboutSection from "./components/AboutSection";
import AdminPanel from "./components/AdminPanel";
import ApplicationsSection from "./components/ApplicationsSection";
import BrandsSection from "./components/BrandsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import StatsBar from "./components/StatsBar";

const isAdmin =
  typeof window !== "undefined" && window.location.pathname === "/admin";

export default function App() {
  if (isAdmin) {
    return <AdminPanel />;
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background:
          "linear-gradient(135deg, #0B0F14 0%, #0f1520 50%, #0B0F14 100%)",
      }}
    >
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <BrandsSection />
        <ProductCatalog />
        <ApplicationsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
