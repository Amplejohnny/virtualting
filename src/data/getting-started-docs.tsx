import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const gettingStartedSections: SectionType[] = [
  {
    id: "for-talents",
    title: "Getting Started as Talent",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>

        <SubTopic id="step-by-step">Step-By-Step Onboarding</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Follow this steps to onboard as a Talent:
        </p>

        <SubTopic id="create-talent">1. Create an Account</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="complete-verification">2. Complete Verification</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="set-availability">3. Set Your Availability</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="profile-setup">4. Profile Setup</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="receive-slot">5. Receive or Request Slots</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="work-on-slot">6. Work on Slots</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="track-progress">7. Track Progress & Earnings</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="best-practices">Best Practices</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>
      </>
    ),
    href: "/docs/getting-started#for-talents",
  },
  {
    id: "for-employers",
    title: "Getting Started as Employer",
    content: (
      <>
        <p>
          As an Employer in Virtualting, you can leverage Virtualting to build
          flexible, output-driven teams that adapt to your evolving needs.
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>

        <SubTopic id="step-by-step-setup">Step-By-Step Setup</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Follow this steps to onboard as a Employer:
        </p>

        <SubTopic id="create-employer">1. Create a Company Profile</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="fund-wallet">2. Fund Your Wallet</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
        </ul>

        <SubTopic id="slot-requirement">3. Post Slot Requirement</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">Create slot engagements with:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="book-talents">4. Book Talents</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="slot-delivery">5. Track Slot Delivery</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="submit-feedback">6. Submit Feedback</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
        </ul>

        <SubTopic id="manage-contracts">
          7. Manage Contracts and Policies
        </SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="best-practices2">Best Practices</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Gig economy optimization</li>
        </ul>
      </>
    ),
    href: "/docs/getting-started#for-employers",
  },
  {
    id: "for-admins",
    title: "Getting Started as Admin",
    content: (
      <>
        <p>
          As an Admin in Virtualting, you play a crucial role in managing the
          platform, ensuring smooth operations, and maintaining the integrity of
          the Virtualting ecosystem.
        </p>

        <SubTopic id="admin-duties">Core Administrative Duties</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">
          Follow this steps to onboard as a Employer:
        </p>

        <SubTopic id="system-configuration">1. System Configuration</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="user-verification">
          2. User Verification & Management
        </SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
        </ul>

        <SubTopic id="monitor-analysis">3. Monitoring and Analysis</SubTopic>
        <p className="mt-3 ml-3 md:ml-6">Create slot engagements with:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="dispute-resolution">4. Dispute Resolution</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="platform-maintenance">5. Platform Maintenance</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Fractional roles in startups</li>
          <li>Gig economy optimization</li>
        </ul>

        <SubTopic id="compliance-enforcement">
          6. Compliance Enforcement
        </SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Fractional roles in startups</li>
        </ul>

        <SubTopic id="best-practices3">Best Practices</SubTopic>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Remote-first teams</li>
          <li>Startups needing specialized talent without full-time hires</li>
          <li>Gig economy optimization</li>
        </ul>
      </>
    ),
    href: "/docs/getting-started#for-admins",
  },
];
