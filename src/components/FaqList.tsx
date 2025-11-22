import React from "react";
import type { FaqEntry } from "@content/treatments";

type Props = {
  items: FaqEntry[];
};

const FaqList: React.FC<Props> = ({ items }) => (
  <div className="faq">
    {items.map((entry) => (
      <details key={entry.question}>
        <summary>{entry.question}</summary>
        <p>{entry.answer}</p>
      </details>
    ))}
  </div>
);

export default FaqList;
