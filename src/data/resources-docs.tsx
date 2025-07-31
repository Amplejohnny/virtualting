import { SubTopic } from "../components/docSection";

export type SectionType = {
  id: string;
  href: string;
  title: string;
  content: React.ReactNode;
};

export const resourcesSections: SectionType[] = [
  {
    id: "faqs",
    title: "Frequently Asked Questions (FAQs)",
    content: (
      <>
        <p>
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>
        <SubTopic id="general-questions">General Asked Questions</SubTopic>
        <p className="md:ml-4 ml-2 font-bold">
          1. What is Virtualting in one sentence?
        </p>
        <p className="md:ml-10 ml-3">
          Virtualting is a reimagined employment framework that blends
          flexibility, accountability, and growth for both talents and
          employers.
        </p>

        <p className="md:ml-4 ml-2 font-bold">2. How does Virtualting work?</p>
        <p className="md:ml-10 ml-3">
          Virtualting operates on a slot-based system where work is divided into
          2-hour slots, allowing talents to manage their time flexibly while
          ensuring focused productivity.
        </p>

        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            3. What are the key features of Virtualting?
          </span>
        </p>
        <ul className="md:ml-10 ml-3 mt-3 space-y-2">
          <li>Slot-based time allocation</li>
          <li>Integrated performance tracking</li>
          <li>Real-time availability management</li>
        </ul>

        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            4. What are the benefits of Virtualting?
          </span>
        </p>
        <p className="md:ml-4 ml-2">For Professionals:</p>
        <ul className="md:ml-10 ml-3 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>
        <p className="md:ml-4 ml-2 font-bold">For Organisations:</p>
        <ul className="md:ml-10 ml-3 mt-3 space-y-2">
          <li>Increased productivity through focused work sessions</li>
          <li>Fair compensation tied to output</li>
          <li>Clear alignment between goals and time spent</li>
        </ul>

        <SubTopic id="telent-question">For Talents</SubTopic>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            1. How do I get started with Virtualting?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          You can get started by signing up on our platform and creating your
          profile. Once registered, you can explore available slots and book
          them based on your availability.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            2. How do I manage my time effectively?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          Virtualting provides tools to manage your time effectively, including
          real-time availability management and performance tracking. You can
          set your own schedule and book slots that align with your
          availability.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">3. How does compensation work?</span>
        </p>
        <p className="md:ml-10 ml-3">
          Compensation is based on the slots you book and the work you complete
          during those slots. You can set your own rates and negotiate terms
          with employers.
        </p>

        <SubTopic id="employer-question">For Employers</SubTopic>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            1. How do I find talents for my projects?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          You can find talents by posting your project requirements on our
          platform. Talents can then apply for the slots that match their skills
          and availability.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            2. How do I manage projects with multiple talents?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          Virtualting allows you to manage projects with multiple talents by
          providing tools for collaboration, communication, and performance
          tracking. You can assign tasks, set deadlines, and monitor progress in
          real-time.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            3. How does Virtualting ensure quality work?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          Virtualting ensures quality work through integrated performance
          tracking, feedback mechanisms, and a transparent rating system. You
          can review talents based on their performance and provide feedback to
          help them improve.
        </p>

        <SubTopic id="admin-platform-builders">
          For Adins and Platform builders
        </SubTopic>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            1. How can I integrate Virtualting into my platform?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          You can integrate Virtualting into your platform by using our API and
          SDKs. We provide comprehensive documentation and support to help you
          get started.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            2. What are the technical requirements for integration?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          The technical requirements for integration include a basic
          understanding of APIs, web development skills, and access to our API
          documentation. We also provide sample code and libraries to help you
          get started.
        </p>
        <p className="md:ml-4 ml-2 font-bold">
          <span className="font-bold">
            3. How can I customize Virtualting for my platform?
          </span>
        </p>
        <p className="md:ml-10 ml-3">
          You can customize Virtualting for your platform by using our API to
          modify the user interface, workflows, and features. We also provide
          support for custom integrations and enhancements.
        </p>
      </>
    ),
    href: "/docs/resources#faqs",
  },
  {
    id: "glossary",
    title: "Glossary of Terms",
    content: (
      <>
        <p>
          The Virtualting model is rooted in flexible, trust-driven
          collaboration that prioritizes time, growth, and mutual
          accountability.
        </p>
        <SubTopic id="slot-based-related">Slot-Related Terms</SubTopic>
        <p className="md:ml-4 ml-2 font-bold">Slot</p>
        <p className="md:ml-10 ml-3">
          A 2-hour time block that talents can book for focused work, allowing
          for flexible scheduling and productivity.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Micro Contract</p>
        <p className="md:ml-10 ml-3">
          A short-term, task-based agreement that allows talents to work on
          specific projects without long-term commitments.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Blocker</p>
        <p className="md:ml-10 ml-3">
          A task or issue that prevents progress on a project, requiring
          immediate attention to resolve.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Recurring Slot</p>
        <p className="md:ml-10 ml-3">
          A slot that is booked on a regular basis, such as weekly or monthly,
          to ensure consistent availability for ongoing work.
        </p>

        <SubTopic id="user-role-term">User & Role Terms</SubTopic>
        <p className="md:ml-4 ml-2 font-bold">Talent</p>
        <p className="md:ml-10 ml-3">
          A professional who offers their skills and expertise through the
          Virtualting platform, booking slots to work on projects.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Employer</p>
        <p className="md:ml-10 ml-3">
          An organization or individual who hires talents for specific projects,
          managing bookings and overseeing work quality.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Admin</p>
        <p className="md:ml-10 ml-3">
          A user with administrative privileges who manages the Virtualting
          platform, overseeing user accounts, bookings, and system settings.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Performance Score</p>
        <p className="md:ml-10 ml-3">
          A metric that evaluates a talent's work quality and productivity,
          based on feedback, completed tasks, and overall performance in booked
          slots.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Promotion Level</p>
        <p className="md:ml-10 ml-3">
          A tiered system that recognizes and rewards talents based on their
          performance, experience, and contributions to the platform.
        </p>

        <p className="md:ml-4 ml-2 font-bold">trust Score</p>
        <p className="md:ml-10 ml-3">
          A rating system that reflects the reliability and professionalism of a
          talent, based on feedback from employers and completed projects.
        </p>

        <SubTopic id="system-technical-terms">
          System & Technical Terms
        </SubTopic>
        <p className="md:ml-4 ml-2 font-bold">Wallet</p>
        <p className="md:ml-10 ml-3">
          A digital account that holds funds for talents and employers, used for
          managing payments, bookings, and transactions within the Virtualting
          platform.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Bond</p>
        <p className="md:ml-10 ml-3">
          A financial commitment made by talents to ensure accountability and
          reliability, which can be refunded based on performance and adherence
          to platform policies.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Dispute Center</p>
        <p className="md:ml-10 ml-3">
          A dedicated space within the platform for resolving conflicts between
          talents and employers, providing tools for communication, evidence
          submission, and resolution tracking.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Feedback Loop</p>
        <p className="md:ml-10 ml-3">
          A continuous process of gathering feedback from talents and employers
          to improve the platform, enhance user experience, and ensure quality
          work.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Onboarding</p>
        <p className="md:ml-10 ml-3">
          The process of integrating new talents and employers into the
          Virtualting platform, including account setup, training, and
          familiarization with features and functionalities.
        </p>

        <p className="md:ml-4 ml-2 font-bold">Versioning</p>
        <p className="md:ml-10 ml-3">
          A system for managing updates and changes to the Virtualting platform,
          ensuring that users have access to the latest features, bug fixes, and
          improvements.
        </p>

        <p className="md:ml-4 ml-2 font-bold">trust Governance</p>
        <p className="md:ml-10 ml-3">
          A framework for maintaining the integrity and security of the
          Virtualting platform, including policies for user behavior, dispute
          resolution, and compliance with legal and ethical standards.
        </p>
      </>
    ),
    href: "/docs/resources#glossary",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    content: (
      <>
        <p>
          Virtualting opens up dynamic possibilities across industries and
          organization sizes.
        </p>

        <SubTopic id="scaling-with-virtualting">
          Case Study 1: Startup Scaling with Virtualting
        </SubTopic>
        <ul className="md:ml-4 ml-2 mt-3 space-y-2">
          <li>
            <span className="font-bold">Company: </span>
            Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Problem: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Solution: </span>Scale your income and
            impact
          </li>
          <li>
            <span className="font-bold">Outcome: </span>Scale your income and
            impact
          </li>
        </ul>

        <SubTopic id="youth-empowerment-program">
          Case Study 2: Youth Empowerment Program
        </SubTopic>
        <ul className="md:ml-4 ml-2 mt-3 space-y-2">
          <li>
            <span className="font-bold">Partner: </span>
            Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Program: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Virtualting Setup: </span>Scale your
            income and impact
          </li>
          <li>
            <span className="font-bold">Impart: </span>Scale your income and
            impact
          </li>
        </ul>

        <SubTopic id="remote-ops">
          Case Study 3: Global NGOs Using Virtualting for Remote Ops
        </SubTopic>
        <ul className="md:ml-4 ml-2 mt-3 space-y-2">
          <li>
            <span className="font-bold">Organisation: </span>
            Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Use: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Systemm Used: </span>Scale your income
            and impact
          </li>
          <li>
            <span className="font-bold">Results: </span>Scale your income and
            impact
          </li>
        </ul>

        <SubTopic id="build-on-virtualting">
          Case Study 4: Platform Built on Virtualting
        </SubTopic>
        <ul className="md:ml-4 ml-2 mt-3 space-y-2">
          <li>
            <span className="font-bold">Founder: </span>
            Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Approach: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Result: </span>Scale your income and
            impact
          </li>
          <li>
            <span className="font-bold">Additional: </span>Scale your income and
            impact
          </li>
        </ul>

        <SubTopic id="Career-shift">
          Case Study 5: Career Shift Through Structured Work
        </SubTopic>
        <ul className="md:ml-4 ml-2 mt-3 space-y-2">
          <li>
            <span className="font-bold">Talent: </span>
            Multi-role flexibility
          </li>
          <li>
            <span className="font-bold">Background: </span>Own your schedule
          </li>
          <li>
            <span className="font-bold">Action: </span>Scale your income and
            impact
          </li>
          <li>
            <span className="font-bold">Growth: </span>Scale your income and
            impact
          </li>
          <li>
            <span className="font-bold">Outcome: </span>Scale your income and
            impact
          </li>
        </ul>
      </>
    ),
    href: "/docs/resources#case-studies",
  },
];
