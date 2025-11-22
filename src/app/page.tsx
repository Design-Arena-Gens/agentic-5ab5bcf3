import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import ResearchCard from "@/components/ResearchCard";
import TrialTable from "@/components/TrialTable";
import FaqList from "@/components/FaqList";
import ResourceLinks from "@/components/ResourceLinks";
import {
  supportiveInterventions,
  emergingResearch,
  clinicalTrials,
  faq,
  resources
} from "@content/treatments";

const HomePage = () => (
  <div className="page">
    <Hero />

    <SectionHeading
      title="What treatments exist today?"
      subtitle="SHANK3-related conditions are managed through multidisciplinary support rather than a single curative therapy."
      id="current-care"
    />
    <div className="grid">
      {supportiveInterventions.map((intervention) => (
        <InfoCard key={intervention.id} item={intervention} />
      ))}
    </div>

    <SectionHeading
      title="Investigational and emerging approaches"
      subtitle="Research programs exploring disease-modifying strategies remain experimental and outside standard of care."
      id="emerging"
    />
    <div className="grid grid--highlight">
      {emergingResearch.map((program) => (
        <ResearchCard key={program.id} program={program} />
      ))}
    </div>

    <SectionHeading
      title="Active and recent clinical trials"
      subtitle="Monitoring registries like ClinicalTrials.gov helps identify participation opportunities."
      id="trials"
    />
    <TrialTable trials={clinicalTrials} />

    <SectionHeading
      title="Questions families often ask"
      subtitle="High-level answers to common questions about SHANK3-related care."
      id="faq"
    />
    <FaqList items={faq} />

    <SectionHeading
      title="Further resources"
      subtitle="Connect with specialist networks, registries, and curated trial trackers."
      id="resources"
    />
    <ResourceLinks resources={resources} />

    <footer className="footer">
      <p>
        Updated {new Date().getFullYear()}. Generated for educational purposes using public,
        peer-reviewed sources. Always confirm details with medical professionals and trial
        coordinators.
      </p>
    </footer>
  </div>
);

export default HomePage;
