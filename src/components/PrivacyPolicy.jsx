import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'April 30, 2026';
const CONTACT_EMAIL = 'jachatlen@gmail.com';
const SITE_NAME = 'Freelance Hourly Rate Calculator';
const SITE_URL = 'https://freelancehourlyratecalculator.com';

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 transition-colors"
          >
            ← Back to Calculator
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mt-1">
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {SITE_NAME}
          </p>
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 text-left">

            <p className="text-gray-600 leading-relaxed mb-8">
              This Privacy Policy explains how {SITE_NAME} (
              <a href={SITE_URL} className="text-blue-600 hover:underline">{SITE_URL}</a>
              ) collects, uses, and shares information about you when you use our
              website. By using this site, you agree to the terms described below.
            </p>

            <Section title="1. Information We Collect">
              <p>
                <strong className="text-gray-700">Personal data:</strong> We do
                not collect, store, or process any personally identifiable
                information (PII) through this website. The calculator runs
                entirely in your browser — no inputs you enter are transmitted
                to our servers.
              </p>
              <p>
                <strong className="text-gray-700">Automatically collected data:</strong>{' '}
                Like most websites, we use third-party services (detailed below)
                that may automatically collect certain technical information,
                including your IP address, browser type, operating system,
                referring URL, pages visited, and time spent on the site. This
                data is collected via cookies and similar tracking technologies.
              </p>
            </Section>

            <Section title="2. Cookies and Tracking Technologies">
              <p>
                Cookies are small text files placed on your device by websites
                you visit. We use two categories of third-party cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-gray-700">Analytics cookies</strong>{' '}
                  (Google Analytics): Used to understand how visitors interact
                  with our site — pages viewed, session duration, traffic
                  sources. This data is aggregated and anonymous.
                </li>
                <li>
                  <strong className="text-gray-700">Advertising cookies</strong>{' '}
                  (Google AdSense): Used to serve relevant advertisements. These
                  cookies may track your browsing activity across other websites
                  to personalize the ads you see.
                </li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings.
                Note that disabling cookies may affect the functionality of some
                parts of this site.
              </p>
            </Section>

            <Section title="3. Google AdSense (Third-Party Advertising)">
              <p>
                We use Google AdSense to display advertisements on this site.
                Google AdSense is operated by Google LLC. Google uses cookies to
                serve ads based on your prior visits to this website and other
                websites on the internet.
              </p>
              <p>
                Google's use of advertising cookies enables it and its partners
                to serve ads to you based on your visit to our site and/or other
                sites on the internet. You may opt out of personalized
                advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Ads Settings
                </a>
                .
              </p>
              <p>
                For more information about how Google uses data when you use
                Google's partners' sites or apps, see{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  How Google uses data when you use our partners' sites or apps
                </a>
                .
              </p>
            </Section>

            <Section title="4. Google Analytics">
              <p>
                We use Google Analytics to collect anonymous, aggregated
                information about how visitors use this website. Google Analytics
                collects information such as how often users visit this site,
                what pages they visit, and what other sites they used prior to
                coming to this site.
              </p>
              <p>
                We use this information solely to improve our website. Google
                Analytics collects only the IP address assigned to you on the
                date you visit this site, not your name or other identifying
                information. We do not combine the information collected through
                Google Analytics with personally identifiable information.
              </p>
              <p>
                You can prevent Google Analytics from recognizing you on return
                visits by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </Section>

            <Section title="5. How We Use Collected Information">
              <p>The information collected by third-party services is used to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Analyze and improve website performance and user experience</li>
                <li>Serve relevant advertisements to support the free availability of this tool</li>
                <li>Understand aggregate traffic patterns and usage trends</li>
              </ul>
              <p>
                We do not sell, trade, rent, or share any personally identifiable
                information with third parties for their marketing purposes.
              </p>
            </Section>

            <Section title="6. Third-Party Links">
              <p>
                This website may contain links to third-party websites. We have
                no control over the content, privacy practices, or policies of
                any third-party sites and are not responsible for them. We
                encourage you to review the privacy policy of any site you visit.
              </p>
            </Section>

            <Section title="7. Children's Privacy">
              <p>
                This website is not directed at children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe a child has provided personal information to us,
                please contact us so we can delete it.
              </p>
            </Section>

            <Section title="8. Your Rights and Opt-Out Options">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Access and receive a copy of the data held about you</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                Since we do not directly collect personal data, most of these
                rights apply to data held by our third-party service providers.
                You can exercise those rights directly:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <a
                    href="https://myaccount.google.com/data-and-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Manage your Google account data and privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Network Advertising Initiative opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Digital Advertising Alliance opt-out
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal, operational, or regulatory
                reasons. When we make changes, we will update the effective date
                at the top of this page. Your continued use of the site after any
                changes constitutes your acceptance of the new policy.
              </p>
            </Section>

            <Section title="10. Contact Us">
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="font-medium text-gray-800">{SITE_NAME}</p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-blue-600 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href={SITE_URL} className="text-blue-600 hover:underline">
                    {SITE_URL}
                  </a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {SITE_NAME} — All calculations are estimates for planning purposes only.
        </div>
      </footer>
    </div>
  );
}
