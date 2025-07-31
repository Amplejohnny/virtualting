//Description: A React component for rendering a documentation section with a title and content.

interface DocSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Heading({ id, title, children }: DocSectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-[150px]">
      <div className="border-l-4 border-blue-700 pl-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      </div>
      <div className="text-gray-700 space-y-4 px-2 md:px-0">{children}</div>
    </section>
  );
}

// Description: A React component for rendering a sub-topic with a title and content.

interface SubTopicProps {
  id: string;
  children: React.ReactNode;
}

export function SubTopic({ id, children }: SubTopicProps) {
  return (
    <div
      id={id}
      className="border-l-4 border-blue-500 bg-white shadow-sm pl-4 py-3 mt-8 md:mt-10 scroll-mt-[150px]"
    >
      <h3 className="text-base font-bold text-gray-800">{children}</h3>
    </div>
  );
}
