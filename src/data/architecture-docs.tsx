import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const architectureSections: SectionType[] = [
  {
    id: "system-overview",
    title: "System Overview",
    content: (
      <>
        <p className="mb-4">
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>

        <SubTopic id="key-system-components">Key System Components</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          React, TailwindCSS, TypeScript for strong typing and styling
          consistency.
        </p>

        <SubTopic id="state-management">Slot Engine</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="user-identity-layer">User Identity Layer</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="contract-generator">Contract Generator</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="wallet-payment-processor">
          Wallet + Payment Processor
        </SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="performance-tracker">Performance Tracker</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="admin-dashboard">Admin and Compliance Dashboard</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="notification-system">
          Notification and Reminder System
        </SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Zustand is used for lightweight and scalable state management.
        </p>
      </>
    ),
    href: "/docs/architecture#system-overview",
  },
  {
    id: "slot-mechanics",
    title: "Slot Mechanics",
    content: (
      <>
        <p className="mb-4">
          The slot system is the core mechanism that enables flexible work
          allocation and tracking in Virtualting.
        </p>

        <SubTopic id="slot-definition">What is a Slot?</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          A slot is a predefined time unit (typically 2 hours) that serves as
          the basic building block of work organization in Virtualting.
        </p>

        <SubTopic id="slot-types">Types of Slots</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Fixed Slots: </span>Regular,
              recurring time blocks
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Flex Slots: </span>Variable timing
              based on availability
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Project Slots: </span>Dedicated to
              specific projects
            </span>
          </li>
        </ul>

        <SubTopic id="slot-allocation">Slot Allocation</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Dynamic allocation based on availability</li>
          <li>Priority-based assignment</li>
          <li>Conflict resolution mechanisms</li>
        </ul>

        <SubTopic id="slot-tracking">Slot Tracking</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Real-time monitoring</li>
          <li> Performance metrics</li>
          <li>Automated reporting</li>
        </ul>
      </>
    ),
    href: "/docs/architecture#slot-mechanics",
  },
  {
    id: "roles-responsibilities",
    title: "Roles & Responsibilities",
    content: (
      <>
        <p className="mb-4">
          The Virtualting model integrates a robust governance and legal
          infrastructure to ensure compliance, security, and trust across all
          interactions.
        </p>

        <SubTopic id="governance-structure">Governance Structure</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Micro Contracts: </span>Multi-role
              flexibility
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Bond System: </span>Own your
              schedule
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Policy Enforcement: </span>Scale
              your income and impact
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Labour Law Integration: </span>Own
              your schedule
            </span>
          </li>
          <li className="flex items-start">
            <span>
              <span className="font-semibold">Exit Rules: </span>Scale your
              income and impact
            </span>
          </li>
        </ul>
      </>
    ),
    href: "/docs/architecture#roles-responsibilities",
  },
];
