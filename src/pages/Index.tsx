import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import Solutions from "@/widgets/Solutions";
import React from "react";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Header />

      <main className="mt-20">
        <Hero />

        <section className="md:p-20">
          <Solutions />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Index;
