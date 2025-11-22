import React from "react";
import type { ResourceLink } from "@content/treatments";

type Props = {
  resources: ResourceLink[];
};

const ResourceLinks: React.FC<Props> = ({ resources }) => (
  <ul className="resource-list">
    {resources.map((resource) => (
      <li key={resource.url}>
        <a href={resource.url} target="_blank" rel="noreferrer">
          {resource.name}
        </a>
        <p>{resource.description}</p>
      </li>
    ))}
  </ul>
);

export default ResourceLinks;
