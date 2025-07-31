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
        <p className="mb-4">
          Virtualting provides a comprehensive suite of built-in tools designed
          to streamline virtual employment relationships and enhance
          productivity for both talents and employers.
        </p>

        <SubTopic id="slot-management">Slot Management Interface</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Visual calendar interface for slot scheduling</span>
          </li>
          <li className="flex items-start">
            <span>Drag-and-drop slot management</span>
          </li>
          <li className="flex items-start">
            <span>Automated conflict detection</span>
          </li>
        </ul>

        <SubTopic id="wallet-and-payment">Wallet & Payment Center</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Real-time balance tracking</span>
          </li>
          <li className="flex items-start">
            <span>Multiple payment method support</span>
          </li>
          <li className="flex items-start">
            <span>Automated invoicing system</span>
          </li>
        </ul>

        <SubTopic id="feedback-system">Feedback and Rating System</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>360-degree feedback mechanism</span>
          </li>
          <li className="flex items-start">
            <span>Performance metrics tracking</span>
          </li>
          <li className="flex items-start">
            <span>Improvement suggestions</span>
          </li>
        </ul>

        <SubTopic id="blocker-reporting">Blocker Reporting Module</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Issue categorization</span>
          </li>
          <li className="flex items-start">
            <span>Priority-based routing</span>
          </li>
          <li className="flex items-start">
            <span>Resolution tracking</span>
          </li>
        </ul>

        <SubTopic id="real-notification">
          Real-time Notification System
        </SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Multi-channel alerts</span>
          </li>
          <li className="flex items-start">
            <span>Customizable notifications</span>
          </li>
          <li className="flex items-start">
            <span>Smart notification grouping</span>
          </li>
        </ul>

        <SubTopic id="text-tracker">Task Tracker & Notes Board</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Kanban-style task management</span>
          </li>
          <li className="flex items-start">
            <span>Collaborative note-taking</span>
          </li>
          <li className="flex items-start">
            <span>Progress tracking</span>
          </li>
        </ul>

        <SubTopic id="document-center">Document Center</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Secure document storage</span>
          </li>
          <li className="flex items-start">
            <span>Version control</span>
          </li>
          <li className="flex items-start">
            <span>Access management</span>
          </li>
        </ul>
      </>
    ),
    href: "/docs/tools-integration#platform",
  },
  {
    id: "third-party",
    title: "Integration with External Tools",
    content: (
      <>
        <p className="mb-4">
          Virtualting seamlessly integrates with popular third-party tools and
          services to provide a comprehensive virtual employment ecosystem.
        </p>

        <SubTopic id="communication-third-party">Communication Tools</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Slack integration</span>
          </li>
          <li className="flex items-start">
            <span>Microsoft Teams connector</span>
          </li>
          <li className="flex items-start">
            <span>Zoom meeting integration</span>
          </li>
        </ul>

        <SubTopic id="calendar-sync">Calendar Integration</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Google Calendar sync</span>
          </li>
          <li className="flex items-start">
            <span>Outlook Calendar integration</span>
          </li>
          <li className="flex items-start">
            <span>iCal support</span>
          </li>
        </ul>

        <SubTopic id="file-sharing">File Sharing Platforms</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Google Drive integration</span>
          </li>
          <li className="flex items-start">
            <span>Dropbox sync</span>
          </li>
          <li className="flex items-start">
            <span>OneDrive connector</span>
          </li>
        </ul>

        <SubTopic id="time-management">Time Tracking Tools</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Toggl integration</span>
          </li>
          <li className="flex items-start">
            <span>Harvest connector</span>
          </li>
          <li className="flex items-start">
            <span>RescueTime sync</span>
          </li>
        </ul>

        <SubTopic id="payment">Payment Gateways</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Stripe integration</span>
          </li>
          <li className="flex items-start">
            <span>PayPal Business</span>
          </li>
          <li className="flex items-start">
            <span>Wire transfer support</span>
          </li>
        </ul>

        <SubTopic id="security">Security & Compliance</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>SSO providers</span>
          </li>
          <li className="flex items-start">
            <span>2FA solutions</span>
          </li>
          <li className="flex items-start">
            <span>Compliance tools</span>
          </li>
        </ul>

        <SubTopic id="whitelabel-options">
          Customization & Whitelabel Options
        </SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Custom branding options</span>
          </li>
          <li className="flex items-start">
            <span>UI/UX customization</span>
          </li>
          <li className="flex items-start">
            <span>Workflow adaptation</span>
          </li>
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
        <p className="mb-4">
          Virtualting provides comprehensive API access for custom integrations
          and extending platform functionality.
        </p>

        <SubTopic id="api-modules">Available API Modules</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>RESTful API endpoints</span>
          </li>
          <li className="flex items-start">
            <span>GraphQL support</span>
          </li>
          <li className="flex items-start">
            <span>Webhook integrations</span>
          </li>
        </ul>

        <SubTopic id="slot-api">Slot Management API</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Slot CRUD operations</span>
          </li>
          <li className="flex items-start">
            <span>Availability management</span>
          </li>
          <li className="flex items-start">
            <span>Scheduling automation</span>
          </li>
        </ul>

        <SubTopic id="user-management-api">User Management API</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>User authentication</span>
          </li>
          <li className="flex items-start">
            <span>Profile management</span>
          </li>
          <li className="flex items-start">
            <span>Role-based access control</span>
          </li>
        </ul>

        <SubTopic id="wallet-api">Wallet & Payment API</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Transaction processing</span>
          </li>
          <li className="flex items-start">
            <span>Balance management</span>
          </li>
          <li className="flex items-start">
            <span>Payment integration</span>
          </li>
        </ul>

        <SubTopic id="contract-api">Contract Management API</SubTopic>
        <ul className="mt-3 space-y-2 ml-2 md:ml-6">
          <li className="flex items-start">
            <span>Contract generation</span>
          </li>
          <li className="flex items-start">
            <span>Digital signatures</span>
          </li>
          <li className="flex items-start">
            <span>Template management</span>
          </li>
        </ul>
      </>
    ),
    href: "/docs/tools-integration#apis",
  },
];
