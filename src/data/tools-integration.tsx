import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const toolsAndIntegrationSections: SectionType[] = [
  {
    id: "platform",
    title: "Core Platform Tools",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="slot-management">Slot Management Interface</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="wallet-and-payment">Wallet & Payment Center</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="feedback-system">Feedback and Rating System</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="blocker-reporting">Blocker Reporting module</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="real-notification">
          Real-time Notification System
        </SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="text-tracker">Text Tracker & Notes Board</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="document-center">Document Center</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>
      </>
    ),
    href: "/docs/tools-integration#platform",
  },
  {
    id: "third-party",
    title: "Integration with External Tools",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="communication-third-party">Communication</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="calendar-sync">Calendar Sync</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="file-sharing">File Sharing</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="ttime-management">Time Management</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="payment">Payment</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="security">Security</SubTopic>
        <p className="ml-4">
          Slot management is the core of Virtualting, allowing talents and
          employers to manage their time effectively and transparently.
        </p>

        <SubTopic id="whitelabel-options">
          Customization & Whitelabel Options
        </SubTopic>
        <p>
          The following element can be custommized enterprise or whitelabel
          deployments
        </p>
        <ul className="list-disc ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="document-center">Roadmap for Future Expansion</SubTopic>
        <p>Future integrations planned for Virtualting platform include:</p>
        <ul className="list-disc ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>
      </>
    ),
    href: "/docs/tools-integration#third-party",
  },
  {
    id: "apis",
    title: "Developer Tools & APIs",
    content: (
      <>
        <p>
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="api-modules">Available API Modules</SubTopic>
        <p className="ml-4">
          Virtualting provides a comprehensive set of APIs to integrate with
          your existing systems and workflows. Key modules include:
        </p>

        <SubTopic id="slot-api">Slot API</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="user-management-api">User Management API</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="wallet-api">Wallet API</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="contract-api">Contract API</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="feedback-api">Feedback API</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="authentication">Authentication</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>

        <SubTopic id="developer-features">
          Developer Dashboard Features
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>
            Boost innovation with external minds who understand your culture
          </li>
          <li>Access specialized skills without long-term commitments</li>
          <li>Rapidly scale teams for project-based work</li>
          <li>Maintain operational flexibility in a changing market</li>
          <li>Fill temporary skill gaps rapidly</li>
        </ul>
      </>
    ),
    href: "/docs/tools-integration#apis",
  },
];
