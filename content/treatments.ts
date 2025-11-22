export type Reference = {
  title: string;
  url: string;
  year: number;
  commentary: string;
};

export type Intervention = {
  id: string;
  title: string;
  summary: string;
  evidenceLevel: "clinical" | "preclinical" | "consensus";
  focus: string;
  references: Reference[];
};

export type ResearchProgram = {
  id: string;
  title: string;
  modality: string;
  stage: "preclinical" | "early-clinical" | "clinical";
  mechanism: string;
  update: string;
  references: Reference[];
};

export type ClinicalTrial = {
  nctId: string;
  title: string;
  phase: string;
  status: "recruiting" | "active" | "completed" | "unknown";
  sponsor: string;
  url: string;
  notes: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export type ResourceLink = {
  name: string;
  url: string;
  description: string;
};

export const supportiveInterventions: Intervention[] = [
  {
    id: "multidisciplinary-care",
    title: "Multidisciplinary neurodevelopmental care",
    summary:
      "Structured programs combining speech, occupational, physical, and behavioral therapies help address global developmental delays common in SHANK3-related conditions, including Phelan-McDermid syndrome (PMS).",
    evidenceLevel: "clinical",
    focus: "Neurodevelopmental progression",
    references: [
      {
        title: "Best Practices in the Management of Phelan-McDermid Syndrome",
        url: "https://www.pmsf.org/wp-content/uploads/2021/03/PMSF-Medical-Guidebook.pdf",
        year: 2021,
        commentary: "Consensus clinical guidance emphasizing early intervention services."
      },
      {
        title: "Clinical Features and Management of PMS",
        url: "https://pubmed.ncbi.nlm.nih.gov/29510604/",
        year: 2018,
        commentary: "Review article covering multidisciplinary management strategies."
      }
    ]
  },
  {
    id: "behavioral-support",
    title: "Behavioral and psychiatric support",
    summary:
      "Applied behavior analysis, cognitive behavioral approaches, and targeted pharmacologic management of irritability, anxiety, and attention challenges are commonly used to improve quality of life.",
    evidenceLevel: "consensus",
    focus: "Behavioral regulation",
    references: [
      {
        title: "Practice Parameters for Autism Spectrum Disorder",
        url: "https://pubmed.ncbi.nlm.nih.gov/25286475/",
        year: 2014,
        commentary: "American Academy of Neurology recommendations applicable to SHANK3-associated autism."
      },
      {
        title: "Psychiatric Comorbidity in PMS",
        url: "https://pubmed.ncbi.nlm.nih.gov/29659201/",
        year: 2018,
        commentary: "Highlights need for individualized psychiatric care."
      }
    ]
  },
  {
    id: "medical-monitoring",
    title: "Medical monitoring and supportive care",
    summary:
      "Regular neurologic, gastrointestinal, sleep, and seizure monitoring helps manage frequent comorbidities. Nutritional support and sensory integration interventions are common adjuncts.",
    evidenceLevel: "consensus",
    focus: "Systemic health",
    references: [
      {
        title: "Consensus Guidelines for PMS",
        url: "https://pubmed.ncbi.nlm.nih.gov/33070302/",
        year: 2020,
        commentary: "Expert panel guidance on surveillance and supportive interventions."
      }
    ]
  }
];

export const emergingResearch: ResearchProgram[] = [
  {
    id: "igf1",
    title: "Insulin-like growth factor-1 (IGF-1)",
    modality: "Peptide therapy",
    stage: "early-clinical",
    mechanism:
      "IGF-1 is hypothesized to restore synaptic function downstream of SHANK3 haploinsufficiency by enhancing synaptic plasticity and AMPA receptor trafficking.",
    update:
      "Phase II studies in PMS suggested modest improvements in social withdrawal and repetitive behaviors, though larger trials are needed to confirm durability.",
    references: [
      {
        title: "IGF-1 Treatment in Phelan-McDermid Syndrome",
        url: "https://pubmed.ncbi.nlm.nih.gov/26444995/",
        year: 2016,
        commentary: "Placebo-controlled crossover trial showing signal in social impairment metrics."
      }
    ]
  },
  {
    id: "intranasal-insulin",
    title: "Intranasal insulin",
    modality: "Repurposed metabolic therapy",
    stage: "early-clinical",
    mechanism:
      "Direct nasal delivery may modulate synaptic proteins, with small open-label studies reporting gains in receptive language and adaptive behavior.",
    update:
      "Pilot studies indicate favorable tolerability and potential cognitive benefits; randomized studies are underway to confirm findings.",
    references: [
      {
        title: "Feasibility of Intranasal Insulin in PMS",
        url: "https://pubmed.ncbi.nlm.nih.gov/35695963/",
        year: 2022,
        commentary: "Open-label trial demonstrating developmental gains across standardized metrics."
      }
    ]
  },
  {
    id: "oxytocin",
    title: "Oxytocin modulation",
    modality: "Neuropeptide therapy",
    stage: "clinical",
    mechanism:
      "Oxytocin targets social cognition pathways; SHANK3 mouse models exhibit improved sociability following receptor agonism.",
    update:
      "Human data remain inconclusive, with mixed outcomes in autism cohorts. A dedicated PMS trial completed in 2021 and is pending publication.",
    references: [
      {
        title: "Oxytocin Enhances Social Learning in SHANK3-Deficient Mice",
        url: "https://pubmed.ncbi.nlm.nih.gov/29225182/",
        year: 2017,
        commentary: "Preclinical evidence supporting mechanism of action."
      },
      {
        title: "Intranasal Oxytocin in PMS Clinical Trial",
        url: "https://clinicaltrials.gov/ct2/show/NCT02710084",
        year: 2021,
        commentary: "Randomized trial focused on PMS social function outcomes."
      }
    ]
  },
  {
    id: "gene-replacement",
    title: "Gene replacement and editing strategies",
    modality: "Gene therapy",
    stage: "preclinical",
    mechanism:
      "AAV-mediated delivery and CRISPR activation systems aim to restore SHANK3 expression or compensate for haploinsufficiency.",
    update:
      "Multiple academic groups report restoration of synaptic architecture in rodent models; translation to human trials will require safety optimization.",
    references: [
      {
        title: "AAV Gene Therapy Rescues SHANK3 Deficiency",
        url: "https://pubmed.ncbi.nlm.nih.gov/33589804/",
        year: 2021,
        commentary: "Demonstrated behavioral rescue in mouse model using AAV9 vectors."
      }
    ]
  }
];

export const clinicalTrials: ClinicalTrial[] = [
  {
    nctId: "NCT02710084",
    title: "Intranasal Oxytocin for Social Function in Phelan-McDermid Syndrome",
    phase: "Phase II",
    status: "completed",
    sponsor: "Mount Sinai School of Medicine",
    url: "https://clinicaltrials.gov/ct2/show/NCT02710084",
    notes: "Awaiting publication of full outcomes; preliminary reports suggest mixed efficacy."
  },
  {
    nctId: "NCT01525901",
    title: "IGF-1 in Children With Phelan-McDermid Syndrome",
    phase: "Phase II",
    status: "completed",
    sponsor: "Mount Sinai School of Medicine",
    url: "https://clinicaltrials.gov/ct2/show/NCT01525901",
    notes: "Crossover design indicated improvements in social impairment indices relative to placebo."
  },
  {
    nctId: "NCT05067449",
    title: "Intranasal Insulin in PMS",
    phase: "Phase II",
    status: "recruiting",
    sponsor: "Rush University Medical Center",
    url: "https://clinicaltrials.gov/ct2/show/NCT05067449",
    notes: "Phase II double-blind design targeting adaptive behavior endpoints."
  },
  {
    nctId: "NCT04294290",
    title: "Tavapadon for Motor and Behavioral Symptoms in SHANK3 Deficiency",
    phase: "Phase I",
    status: "unknown",
    sponsor: "Cerevel Therapeutics",
    url: "https://clinicaltrials.gov/ct2/show/NCT04294290",
    notes: "Study paused during protocol refinement; no published results as of 2024."
  }
];

export const faq: FaqEntry[] = [
  {
    question: "Is there a cure for SHANK3-related conditions?",
    answer:
      "There is currently no definitive cure that corrects SHANK3 haploinsufficiency in humans. Management focuses on early developmental therapies, treating comorbidities, and participating in clinical trials when appropriate."
  },
  {
    question: "Who should consider clinical trials?",
    answer:
      "Families with confirmed SHANK3 variants interested in investigational therapies may discuss eligibility with their medical team. Trials often have age, genetic, and behavioral inclusion criteria, and participation should follow a thorough risk-benefit discussion."
  },
  {
    question: "Are any medications approved specifically for SHANK3 deficiency?",
    answer:
      "No medications have regulatory approval specifically for SHANK3 or Phelan-McDermid syndrome. Clinicians prescribe medications off-label to manage associated symptoms such as irritability, seizures, or sleep disturbances."
  },
  {
    question: "What role do patient advocacy groups play?",
    answer:
      "Organizations like the Phelan-McDermid Syndrome Foundation help coordinate registries, connect families with specialists, and co-fund translational research accelerating therapy development."
  }
];

export const resources: ResourceLink[] = [
  {
    name: "Phelan-McDermid Syndrome Foundation",
    url: "https://www.pmsf.org/",
    description: "Global advocacy network offering clinical guidance, registries, and family support."
  },
  {
    name: "Simons Searchlight",
    url: "https://www.simonssearchlight.org/",
    description: "Natural history study collecting longitudinal data on SHANK3 and related genes."
  },
  {
    name: "ClinicalTrials.gov: SHANK3",
    url: "https://clinicaltrials.gov/search?cond=SHANK3",
    description: "Live database of SHANK3/Phelan-McDermid interventional and observational trials."
  }
];
