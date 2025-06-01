import { SubTopic } from "../components/docSection";

export type DocSection = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const sections: DocSection[] = [
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
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="benefits">Benefits</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="use-cases">Use Cases</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Remote-first teams</li>
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
        <SubTopic id="slot-based-engagement">Slot-Based Engagement</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Work is divided into measurable, bookable time slots</li>
          <li>Focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="dual-sided-structure">Dual-Sided Structure</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Empowers both talent and employer to shape engagement</li>
          <li>Clear responsibilities on both sides</li>
        </ul>

        <SubTopic id="employee-status">Employee Status</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Maintains standard protections and benefits</li>
          <li>Enables fractional employment without legal gray areas</li>
        </ul>

        <SubTopic id="performance-transparency">
          Performance Transparency
        </SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Shared view of results and contributions</li>
          <li>Built-in trust and clarity</li>
        </ul>

        <SubTopic id="time-shared-growth">Time-Shared Growth</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Talent can grow across multiple companies</li>
          <li>Employers get access to specialized, shared expertise</li>
        </ul>
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
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Multi-role flexibility</li>
          <li>Own your schedule</li>
          <li>Scale your income and impact</li>
        </ul>

        <SubTopic id="for-startups-smes">For Startups & SMEs</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Hire top-tier fractional talent affordably</li>
          <li>Scale without full-time risk</li>
        </ul>

        <SubTopic id="for-enterprises">For Enterprises</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Boost innovation with external minds</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="for-government-ngos">For Government & NGOs</SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Staff projects quickly with vetted talent</li>
          <li>Access global specialists on demand</li>
        </ul>

        <SubTopic id="why-virtualting-matters">
          Why Virtualting Matters
        </SubTopic>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Balances autonomy and structure</li>
          <li>Bridges workforce evolution and enterprise needs</li>
        </ul>
      </>
    ),
    href: "/docs/introduction#use-cases",
  },
];

