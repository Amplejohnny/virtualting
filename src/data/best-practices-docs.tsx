import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const bestPracticesSections: SectionType[] = [
  {
    id: "slot-management",
    title: "Slot Management Best Practices",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="for-talent-slot">For Talents</SubTopic>
        <p>As a talent, you can manage your time slots effectively by:</p>

        <SubTopic id="slot-discipline">1. Maintain Slot Discipline</SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="understand-slot-expectation">
          2. Understand Slot Expectations Before Acceptance
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="deliver-scope">3. Deliver Within Scope</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="task-clarity">4. Use Task Notes for Clarity</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="report-blockers">
          5. Report Blockers Transparently
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="last-minute-cancellations">
          6. Avoid Last-Minute Cancellations
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-employer-slot">For Employers</SubTopic>
        <p>As a talent, you can manage your time slots effectively by:</p>

        <SubTopic id="slot-clear-deliverables">
          1. Post Slots with Clear Deliverables
        </SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="time-allocation">
          2. Be Realistic with Time Allocation
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="provide-access">
          3. Provide Access & Materials Beforehand
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="respect-time">4. Respect Talent Time</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="feedback-closeout">
          5. Always Close Out with Feedback
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-admin-slot">For Admins</SubTopic>
        <p>As a talent, you can manage your time slots effectively by:</p>

        <SubTopic id="abnormal-slot-pattern">
          1. Monitor Abnormal Slot Patterns
        </SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="rating-integrity">2. Enforce Rating Integrity</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="system-alert">3. Calibrate System Alert</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="promote-balance">
          4. Promote Balance Across User Types
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
      </>
    ),
    href: "/docs/best-practices#slot-management",
  },
  {
    id: "communication",
    title: "Communication Best Practices",
    content: (
      <>
        <p>
          The Virtualting model is rooted in flexible, trust-driven
          collaboration that prioritizes time, growth, and mutual
          accountability.
        </p>
        <SubTopic id="general-priciples">General Principles</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>is divided into measurable, bookable time slots</li>
          <li>is focus and output are maximized per slot</li>
        </ul>

        <SubTopic id="for-talent-comm">For Talents</SubTopic>
        <p>As a talent, you can manage your time slots effectively by:</p>

        <SubTopic id="status-update">1. Use Status Updates Frequently</SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="acknowledge-feedback">2. Acknowledge Feedback</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="flag-confusion">3. Flag Confusion Early</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="task-honesty">4. Be Honest About Capacity</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-employer-comm">For Employers</SubTopic>
        <p>Your communication with talents is key to success:</p>

        <SubTopic id="pre-slot-briefs">1. Create Pre-Slot Briefs</SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="micro-management">2. Avoid Micro-Management</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="provide-constructive-feedback">
          3. Provide Constructive Feedback
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="regular-reviews">4. Schedule Regular reviews</SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="cultural-best-practices">
          Cultural Best Practices
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Foster a culture of open communication</li>
          <li>Encourage feedback loops</li>
          <li>Promote transparency in decision-making</li>
          <li>Emphasize the importance of regular check-ins</li>
        </ul>
      </>
    ),
    href: "/docs/best-practices#communication",
  },
  {
    id: "compliance",
    title: "Compliance & Legal Best Practices",
    content: (
      <>
        <p>
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="for-al-users">For All Users</SubTopic>
        <p>
          Everyone on the platfor should adhere to these compliance practices:
        </p>
        <SubTopic id="legal-terms">1. Know the Legal Terms</SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="respect-protocols">
          2. Respect Identity Verification Protocols
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="confidential-info">
          3. Handle Confidential Info with Care
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="payment-honesty">
          4. Use Platform for All Payments
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="exit-policies">
          5. Understand Bond & Exit Policies
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="for-al-users">For Admins</SubTopic>
        <p>
          Adinistrators have specific compliance responsibilities to ensure
          platform integrity:
        </p>

        <SubTopic id="legal-templates">
          1. Maintain Up-to-Date Legal Templates
        </SubTopic>
        <ul className=" ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="compliance-quarterly">
          2. Run Compliance Audit Quarterly
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="report-illegal">
          3. Report Illegal Activities Immediately
        </SubTopic>
        <ul className="ml-10 mt-2 space-y-1">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
      </>
    ),
    href: "/docs/best-practices#compliance",
  },
];
