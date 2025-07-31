export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-8 justify-items-center md:justify-items-start text-sm sm:text-base text-gray-600">
        {/* Column: For Employers */}
        <div className="w-full max-w-[160px] md:max-w-none">
          <h4 className="font-medium text-gray-800">For Employers</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                How to Hire
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Resource Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Virtualtant Task
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Virtual Jobs
              </a>
            </li>
          </ul>
        </div>

        {/* Column: For Resources */}
        <div className="w-full max-w-[160px] md:max-w-none">
          <h4 className="font-medium text-gray-800">For Resources</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                How to find Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Find Slots Worldwide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Work Data ID
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Frontlett Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Column: Company */}
        <div className="w-full max-w-[160px] md:max-w-none">
          <h4 className="font-medium text-gray-800">Company</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Team Members
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Leadership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Our Impact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Partners
              </a>
            </li>
          </ul>
        </div>

        {/* Column: Languages */}
        <div className="w-full max-w-[160px] md:max-w-none">
          <h4 className="font-medium text-gray-800">Languages</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                English
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Spanish
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                French
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm sm:text-base text-gray-500 px-4">
        ©{currentYear} Frontlett Virtualting. All Rights Reserved
      </div>
    </footer>
  );
}
