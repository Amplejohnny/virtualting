import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const versioningSections: SectionType[] = [
  {
    id: "release-notes",
    title: "Versioning & Updates",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="release-history">Release History</SubTopic>
        <p className="ml-4">
          Virtualting follows a structured versioning system to ensure clarity
          and consistency in updates. Each version is carefully planned and
          documented to provide users with a clear understanding of changes and
          improvements. The versioning system includes major releases, minor
          updates, and patch releases, each serving a specific purpose in the
          evolution of the platform.
        </p>

        <SubTopic id="foundation-phase">
          Version 1.0 - "Foundation Phase"
        </SubTopic>
        <p className="font-bold ml-4">Released Date: January 2024</p>
        <p className="font-bold ml-4">
          Focus: Establishing the Core Employment Model
        </p>
        <p className="font-bold ml-4">Highlights:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
        <p className="font-bold ml-4">Impacts:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="feedback-revolution">
          Version 2.0 - "Feedback revolution"
        </SubTopic>
        <p className="font-bold ml-4">Released Date: Febrary 2025</p>
        <p className="font-bold ml-4">
          Focus: Trust Building and User Feedback Accuracy
        </p>
        <p className="font-bold ml-4">Highlights:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
        <p className="font-bold ml-4">Impacts:</p>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="versioning-philosophy">Versioning Philosophy</SubTopic>
        <p className="ml-4">
          Virtualting's versioning philosophy is centered around continuous
          improvement and user-centric development. Each version is designed to
          enhance the user experience, address feedback, and adapt to changing
          needs in the employment landscape. The goal is to create a platform
          that evolves with its users while maintaining stability and
          reliability.
        </p>
        <p className="ml-4">Every update is:</p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Thoroughly tested to ensure reliability</li>
          <li>Documented with clear release notes</li>
          <li>Communicated effectively to all users</li>
        </ul>
      </>
    ),
    href: "/docs/versioning#release-notes",
  },
  {
    id: "migration",
    title: "Migration Guides",
    content: (
      <>
        <p>
          The Virtualting model is rooted in flexible, trust-driven
          collaboration that prioritizes time, growth, and mutual
          accountability.
        </p>
        <SubTopic id="migration-strategy">
          Step-by-Step Migration Strategy
        </SubTopic>
        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p className="ml-10 font-bold">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="migration-support">Migration Support Tools</SubTopic>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>
        <p className="ml-4 mt-2">
          The slot system creates a structured yet flexible framework that
          allows both talents and employers to manage their time effectively.
        </p>

        <SubTopic id="user-responsibility">
          User Responsibilities in New Version
        </SubTopic>
        <p className="ml-4">
          With the introduction of the new version, users are expected to:
        </p>

        <SubTopic id="talent-migrating">Talents</SubTopic>
        <ul className="ml-14 mt-2 space-y-1">
          <li>Review the new features and changes</li>
          <li>Update their profiles to reflect new capabilities</li>
          <li>Engage with the community for support and feedback</li>
        </ul>

        <SubTopic id="employer-migrating">Employers</SubTopic>
        <ul className="ml-14 mt-2 space-y-1">
          <li>Review the new features and changes</li>
          <li>Update their profiles to reflect new capabilities</li>
          <li>Engage with the community for support and feedback</li>
        </ul>

        <SubTopic id="admin-migrating">Admins</SubTopic>
        <ul className="ml-14 mt-2 space-y-1">
          <li>Review the new features and changes</li>
          <li>Update their profiles to reflect new capabilities</li>
          <li>Engage with the community for support and feedback</li>
        </ul>
      </>
    ),
    href: "/docs/versioning#migration",
  },
  {
    id: "roadmap",
    title: "Upcoming Roadmap (2025-2026)",
    content: (
      <>
        <p>
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="role-expansion">Q2 2025: Smart Role Expansion</SubTopic>
        <p className="ml-10">Evaluate Changelog for Future Impact</p>
        <ul className="ml-14 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>
        <p className="ml-10">Evaluate Changelog for Future Impact</p>

        <SubTopic id="institute-modules">
          Q3 2025: Micro-Institute Modules
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="impact-metrics">
          Q4 2025: Gamification & Impact Metrics
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="employment-engine">
          Q1 2026: Cross National Employment Engine
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="employment-engine">
          Q2 2026: Autonomous Trust Governance
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <p>
          This roadmap outlines the key milestones and features planned for the
          next two years, focusing on enhancing the Virtualting experience for
          all users. Each phase is designed to build upon the previous one,
          ensuring a cohesive and progressive development of the platform.
        </p>
      </>
    ),
    href: "/docs/versioning#roadmap",
  },
];
