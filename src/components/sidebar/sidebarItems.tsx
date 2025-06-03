import { MdOutlineMenuBook } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import {
  LuUsers,
  LuSettings,
  LuBuilding,
  LuCog,
  LuGitBranch,
} from "react-icons/lu";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

export const sidebarItems: NavItem[] = [
  {
    label: "Introduction",
    href: "/docs/introduction",
    icon: <MdOutlineMenuBook />,
    children: [
      {
        label: "What is Virtualting?",
        href: "/docs/introduction#what-is-virtualting",
      },
      { label: "Core Principles", href: "/docs/introduction#core-principles" },
      { label: "Use Cases", href: "/docs/introduction#use-cases" },
    ],
  },
  {
    label: "Architecture",
    href: "/docs/architecture",
    icon: <LuBuilding />,
    children: [
      { label: "System Overview", href: "/docs/architecture#system-overview" },
      { label: "Slot Mechanics", href: "/docs/architecture#slot-mechanics" },
      {
        label: "Role & Responsibilities",
        href: "/docs/architecture#roles-responsibilities",
      },
    ],
  },
  {
    label: "Getting Started",
    href: "/docs/getting-started",
    icon: <LuUsers />,
    children: [
      { label: "For Talents", href: "/docs/getting-started#for-talents" },
      { label: "For Employers", href: "/docs/getting-started#for-employers" },
      { label: "For Admins", href: "/docs/getting-started#for-admins" },
    ],
  },
  {
    label: "Tools & Integration",
    href: "/docs/tools-integration",
    icon: <LuCog />,
    children: [
      {
        label: "Virtualting Platform",
        href: "/docs/tools-integration#platform",
      },
      {
        label: "Third-Party Integration",
        href: "/docs/tools-integration#third-party",
      },
      { label: "APIs", href: "/docs/tools-integration#apis" },
    ],
  },
  {
    label: "Best Practices",
    href: "/docs/best-practices",
    icon: <LuSettings />,
    children: [
      {
        label: "Effective Slot Management",
        href: "/docs/best-practices#slot-management",
      },
      {
        label: "Communication Protocols",
        href: "/docs/best-practices#communication",
      },
      { label: "Compliance", href: "/docs/best-practices#compliance" },
    ],
  },
  {
    label: "Versioning & Updates",
    href: "/docs/versioning",
    icon: <LuGitBranch />,
    children: [
      { label: "Release Notes", href: "/docs/versioning#release-notes" },
      { label: "Migration Guides", href: "/docs/versioning#migration" },
      { label: "Roadmap", href: "/docs/versioning#roadmap" },
    ],
  },
  {
    label: "Resources",
    href: "/docs/resources",
    icon: <BsQuestionCircle />,
    children: [
      { label: "FAQs", href: "/docs/resources#faqs" },
      { label: "Glossary", href: "/docs/resources#glossary" },
      { label: "Case Studies", href: "/docs/resources#case-studies" },
    ],
  },
];
