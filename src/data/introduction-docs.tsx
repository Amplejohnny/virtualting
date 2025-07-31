import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const introductionSections: SectionType[] = [
  {
    id: "what-is-virtualting",
    title: "What is Virtualting?",
    content: (
      <>
        <p className="mb-4">
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>

        <SubTopic id="key-features">Key Features</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Multi-role flexibility</li>
          <li>Own your schedule</li>
          <li>Scale your income and impact</li>
        </ul>

        <SubTopic id="benefits">Benefits</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
      </>
    ),
    href: "/docs/introduction#what-is-virtualting",
  },
  {
    id: "core-principles",
    title: "Core Principles",
    content: (
      <>
        <p className="mb-4">
          The Virtualting model is built on five core principles that shape how
          work is organized, valued, and rewarded.
        </p>

        <SubTopic id="slot-based-work">1. Slot-Based Work</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="mt-2 ml-3 md:ml-6">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work, where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="trust-governance">2. Trust Governance</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="mt-2 ml-3 md:ml-6">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work, where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="skill-progression">3. Skill Progression</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="mt-2 ml-3 md:ml-6">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work, where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="performance-transparency">
          4. Performance Transparency
        </SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="mt-2 ml-3 md:ml-6">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work, where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="time-shared-growth">5. Time-Shared Growth</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="mt-2 ml-3 md:ml-6">   
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work, where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>
      </>
    ),
    href: "/docs/introduction#core-principles",
  },
  {
    id: "use-cases",
    title: "Use Cases",
    content: (
      <>
        <p className="mb-4">
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="for-talents">For Talents</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-employers">For Employers</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-admins">For Admins</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
      </>
    ),
    href: "/docs/introduction#use-cases",
  },
];
