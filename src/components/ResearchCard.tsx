import React from "react";
import type { ResearchProgram } from "@content/treatments";

const stageLabels: Record<ResearchProgram["stage"], string> = {
  preclinical: "Preclinical",
  "early-clinical": "Early clinical",
  clinical: "Clinical"
};

type Props = {
  program: ResearchProgram;
};

const ResearchCard: React.FC<Props> = ({ program }) => (
  <article className="card card--highlight">
    <header className="card__header">
      <div className="badge badge--stage">{stageLabels[program.stage]}</div>
      <h3>{program.title}</h3>
      <p className="card__focus">Modality: {program.modality}</p>
    </header>
    <p className="card__summary">{program.mechanism}</p>
    <p className="card__update">Latest update: {program.update}</p>
    <div className="card__references">
      <h4>Evidence snapshot</h4>
      <ul>
        {program.references.map((ref) => (
          <li key={ref.url}>
            <a href={ref.url} target="_blank" rel="noreferrer">
              {ref.title} ({ref.year})
            </a>
            <span className="muted"> — {ref.commentary}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ResearchCard;
