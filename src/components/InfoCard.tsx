import React from "react";
import type { Intervention } from "@content/treatments";

const evidencePalette: Record<Intervention["evidenceLevel"], { label: string; className: string }> = {
  clinical: { label: "Clinical evidence", className: "badge badge--clinical" },
  preclinical: { label: "Preclinical data", className: "badge badge--preclinical" },
  consensus: { label: "Expert consensus", className: "badge badge--consensus" }
};

type Props = {
  item: Intervention;
};

const InfoCard: React.FC<Props> = ({ item }) => {
  const evidence = evidencePalette[item.evidenceLevel];

  return (
    <article className="card">
      <header className="card__header">
        <span className={evidence.className}>{evidence.label}</span>
        <h3>{item.title}</h3>
        <p className="card__focus">Focus: {item.focus}</p>
      </header>
      <p className="card__summary">{item.summary}</p>
      <div className="card__references">
        <h4>Key references</h4>
        <ul>
          {item.references.map((ref) => (
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
};

export default InfoCard;
