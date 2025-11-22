import React from "react";
import type { ClinicalTrial } from "@content/treatments";

type Props = {
  trials: ClinicalTrial[];
};

const statusLabel: Record<ClinicalTrial["status"], string> = {
  recruiting: "Recruiting",
  active: "Active",
  completed: "Completed",
  unknown: "Status unknown"
};

const TrialTable: React.FC<Props> = ({ trials }) => (
  <div className="table-wrapper">
    <table className="trial-table">
      <thead>
        <tr>
          <th scope="col">Trial</th>
          <th scope="col">Phase</th>
          <th scope="col">Status</th>
          <th scope="col">Sponsor</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        {trials.map((trial) => (
          <tr key={trial.nctId}>
            <th scope="row">
              <a href={trial.url} target="_blank" rel="noreferrer">
                {trial.title}
              </a>
            </th>
            <td>{trial.phase}</td>
            <td>{statusLabel[trial.status]}</td>
            <td>{trial.sponsor}</td>
            <td>{trial.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TrialTable;
