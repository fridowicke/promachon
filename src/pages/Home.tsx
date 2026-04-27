import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Coverage from "@/components/Coverage";
import Industries from "@/components/Industries";
import TwoColSection from "@/components/TwoColSection";
import DataStats from "@/components/DataStats";
import Team from "@/components/Team";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />

        <Coverage />

        <Industries />

        <TwoColSection
          id="approach"
          label="Approach"
          heading={<>Expertise, sharpened by machines.</>}
        >
          <p>
            Insurance is a mathematical discipline wrapped in paperwork. We
            treat it as such. Our team reads every clause and models every
            exposure — then uses AI and data analysis to compare the market
            at a depth no broker could reach by hand.
          </p>
          <p>
            The result is coverage that fits your actual risk, priced honestly,
            placed quickly, and re-examined as conditions change.
          </p>
        </TwoColSection>

        <DataStats />

        <Team />

        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
