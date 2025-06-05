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
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="key-features">Key Features</SubTopic>
        <ul className=" ml-10 mt-2 space-y-1 font-bold">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="benefits">Benefits</SubTopic>
        <p className="ml-4">For Professionals:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
        <p className="ml-4 mt-10">For Organisations:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="use-cases">Use Cases</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
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
        <p>
          The Virtualting model is rooted in flexible, trust-driven
          collaboration that prioritizes time, growth, and mutual
          accountability.
        </p>
        <SubTopic id="slot-based-engagement">1. Slot-Based Engagement</SubTopic>
        <p className="ml-4">
          All work happens in 2-hour session known as slot. Each slot:
        </p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>
        <p className="ml-4 mt-2">
          The slot system creates a structured yet flexible framework that
          allows both talents and employers to manage their time effectively.
        </p>

        <SubTopic id="dual-sided-structure">2. Dual-Sided Structure</SubTopic>
        <p className="ml-4">There are two primary user types:</p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Talents: is divided into measurable, bookable time slots</li>
          <li>Employee: is focus and output are maximized per slot</li>
        </ul>
        <p className="ml-4 mt-2">
          The slot system creates a structured yet flexible framework that
          allows both talents and employers to manage their time effectively.
        </p>

        <SubTopic id="employee-status">3. Employee Status</SubTopic>
        <p className="ml-4">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="ml-4 mt-2">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work. where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="performance-transparency">
          4. Performance Transparency
        </SubTopic>
        <p className="ml-4">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="ml-4 mt-2">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work. where they can contribute
          to multiple projects and companies without losing their employment
          status.
        </p>

        <SubTopic id="time-shared-growth">5. Time-Shared Growth</SubTopic>
        <p className="ml-4">
          Each employee is a full-time employee of the company, with benefits
          and protections, but works in a flexible, slot-based manner.
        </p>
        <p className="ml-4 mt-2">
          This model ensures that talents have the security of employment while
          enjoying the flexibility of fractional work. where they can contribute
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
        <p>
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="for-talents">For Talents</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li><span className="font-bold">Portfolio Professionals: </span>Multi-role flexibility</li>
          <li><span className="font-bold">Work-ife Balance Seekers: </span>Own your schedule</li>
          <li><span className="font-bold">Portfolio Professionals: </span>Scale your income and impact</li>
        </ul>

        <SubTopic id="for-startups-smes">For Startups & SMEs</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li><span className="font-bold">Lean Operation: </span>Multi-role flexibility</li>
          <li><span className="font-bold">Work life balance seekers: </span>Own your schedule</li>
          <li><span className="font-bold">Flexible Scaling: </span>Scale your income and impact</li>
        </ul>

        <SubTopic id="for-enterprises">For Enterprises</SubTopic>
        <ul className="ml-10 font-bold mt-2 space-y-1">
          <li>Boost innovation with external minds who understand your culture</li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="for-government-ngos">For Government & NGOs</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li><span className="font-bold">Program Implementation: </span>Multi-role flexibility</li>
          <li><span className="font-bold">Output Tracking: </span>Own your schedule</li>
          <li><span className="font-bold">Flexible Scaling: </span>Scale your income and impact</li>
        </ul>

        <SubTopic id="why-virtualting-matters">
          Why Virtualting Matters
        </SubTopic>
        <p className="ml-4">Remote work has outgrown its old models:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
        <p className="ml-4 mt-10">Virtualting solves this by:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
      </>
    ),
    href: "/docs/introduction#use-cases",
  },
];
