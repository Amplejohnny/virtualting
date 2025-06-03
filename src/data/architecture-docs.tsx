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
        <SubTopic id="tech-stack">Technology Stack</SubTopic>
        <p>
          React, TailwindCSS, TypeScript for strong typing and styling
          consistency.
        </p>

        <SubTopic id="state-management">State Management</SubTopic>
        <p>Zustand is used for lightweight and scalable state management.</p>
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
        <SubTopic id="api-design">API Design</SubTopic>
        <p>RESTful API using Node.js and Express.</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="auth">Authentication</SubTopic>
        <p className="leading-">
          JWT-based authentication with role-level access control.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>
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
        <SubTopic id="websockets">WebSockets</SubTopic>
        <p>
          Socket.io is used for real-time task updates and availability status.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <SubTopic id="notifications">Notifications</SubTopic>
        <p>Live notifications system for bookings and cancellations.</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>
        <SubTopic id="notificatio">Notifications2</SubTopic>
        <p>Live notifications system for bookings and cancellations.</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>
        <SubTopic id="notificati">Notifications3</SubTopic>
        <p>Live notifications system for bookings and cancellations.</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>
      </>
    ),
    href: "/docs/architecture#roles-responsibilities",
  },
];
