import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  id?: string;
};

const SectionHeading: React.FC<Props> = ({ title, subtitle, id }) => (
  <header className="section-heading" id={id}>
    <h2>{title}</h2>
    {subtitle ? <p className="muted">{subtitle}</p> : null}
  </header>
);

export default SectionHeading;
