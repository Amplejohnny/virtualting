import { SubTopic } from "../components/docSection";
import type { SectionType } from "./introduction-docs";

export const architectureSections: SectionType[] = [
  {
    id: "system-overview",
    title: "System Overview",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="key-system-components">Key System Components</SubTopic>
        <p className="ml-4">
          React, TailwindCSS, TypeScript for strong typing and styling
          consistency.
        </p>

        <SubTopic id="state-management">Slot Engine</SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="user-identity-layer">User Identity Layer</SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="contract-generator">Contract Generator</SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="wallet-payment-processor">
          Wallet + Payment Processor
        </SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="performance-tracker">Performance Tracker</SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="admin-dashboard">Admin and Compliance Dashboard</SubTopic>
        <p className="ml-4">
          Zustand is used for lightweight and scalable state management.
        </p>

        <SubTopic id="notification-system">
          Notification and Reminder System
        </SubTopic>
        <p className="ml-4">
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
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="core-property-of-slot">
          Core Properties of a Slot
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            <span className="font-bold">Duration: </span>Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Cost: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Ownership: </span>Scale your income and
            impact
          </li>
        </ul>

        <SubTopic id="slot-breakdown">Slot Lifecycle Breakdown</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="slot-Creation">1. Slot Creation</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="slot-offer">2. Slot Offer/Matching</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="slot-acceptance">3. Slot Acceptance</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="work-execution">4. Work Execution</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="submission">5. Submission</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="feedback-loop">6. Feedback Loop</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="slot-closure">7. Slot Closure and Payout</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
        <SubTopic id="advanced-slot-features">Advanced Slot Features</SubTopic>
        <p className="ml-4">
          JWT-based authentication with role-level access control.
        </p>
      </>
    ),
    href: "/docs/architecture#slot-mechanics",
  },
  {
    id: "roles-responsibilities",
    title: "Role & Responsibilities",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and employers
          when you see the reeper we go' kill him together. I hate when I rap
          and talk about guns, but I love when I rap and talk about guns. I hate
          when I rap and talk about guns, but I love when I rap and talk about
          guns. I hate when I rap and talk about guns, but I love when I rap and
          talk about guns. I hate when I rap and talk about guns, but I love
          when
        </p>
        <SubTopic id="talent">Talent</SubTopic>
        <p className="ml-4">
          Talents whuch include professionals, influencers, and advisors:
        </p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="employer">Employer</SubTopic>
        <p className="ml-4">
          Talents whuch include startups, SME, Team leaders, and Departments:
        </p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="admin">Admin</SubTopic>
        <p className="ml-4">
          Talents whuch include Platform Moderators, Compliance Officers, HR
          leaders and System Administrators:
        </p>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="admin">Goverance and Legal Infrastructure</SubTopic>
        <p className="ml-4">
          The Virtualting model integrates a robust governance and legal
          infrastructure to ensure compliance, security, and trust across all
          interactions. This includes:
        </p>
        <ul className="ml-10 mt-2 space-y-1">
          <li><span className="font-bold">Micro Contracts: </span>Multi-role flexibility</li>
          <li><span className="font-bold">Bond System: </span>Own your schedule</li>
          <li><span className="font-bold">Policy Enforcement: </span>Scale your income and impact</li>
          <li><span className="font-bold">Labour Law Integration: </span>Own your schedule</li>
          <li><span className="font-bold">Exit Rules: </span>Scale your income and impact</li>
        </ul>
      </>
    ),
    href: "/docs/architecture#roles-responsibilities",
  },
];
