import type { Metadata } from 'next';

export default function Privacy() {
  return (
    <div className="container mx-auto py-8 px-4 bg-gunmetal-400/20 backdrop-blur-sm rounded-xl shadow-lg text-steel-blue-200">
      <h1 className="text-4xl sm:text-6xl font-bold mb-12 sm:leading-relaxed bg-gradient-to-r from-steel-blue-400 to-buff-400 bg-clip-text text-transparent">
        Wupperfeld Ventures Privacy Policy
      </h1>
      <p className="pb-8 text-sm text-steel-blue-400">Last Updated: 05/27/2025</p>
      <p className="pb-8 text-steel-blue-600">
        At Wupperfeld Ventures, accessible from https://www.wupperfeld.org, one
        of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by Wupperfeld Ventures and how we use it.
      </p>
      <p className="pb-8 text-steel-blue-600">
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>

      {/* LOG FILES */}
      <h2 className="pb-4 text-2xl text-buff-400">Log Files</h2>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures maintains standard server logs that may include IP
        addresses and basic access information. These logs are used solely for
        security purposes and website maintenance, and are automatically deleted
        after 30 days.
      </p>

      {/* PRIVACY POLICIES */}
      <h2 className="pb-4 text-2xl text-buff-400">Privacy Policies</h2>
      <p className="pb-8 text-steel-blue-600">
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of Wupperfeld Ventures.
      </p>
      <p className="pb-8 text-steel-blue-600">
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on Wupperfeld Ventures, which are
        sent directly to users&apos; browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </p>
      <p className="pb-8 text-steel-blue-600">
        Note that Wupperfeld Ventures has no access to or control over these
        cookies that are used by third-party advertisers.
      </p>

      {/* THIRD PARTY */}
      <h2 className="pb-4 text-2xl text-buff-400">Third Party Privacy Policies</h2>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures&apos;s Privacy Policy does not apply to other
        advertisers or websites. Thus, we are advising you to consult the
        respective Privacy Policies of these third-party ad servers for more
        detailed information. It may include their practices and instructions
        about how to opt-out of certain options.
      </p>
      <p className="pb-8 text-steel-blue-600">
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers&apos; respective
        websites.
      </p>

      {/* CHILDREN */}
      <h2 className="pb-4 text-2xl text-buff-400">Children&apos;s Information</h2>
      <p className="pb-8 text-steel-blue-600">
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>

      {/* ONLINE */}
      <h2 className="pb-4 text-2xl text-buff-400">Online Privacy Policy Only</h2>
      <p className="pb-8 text-steel-blue-600">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Wupperfeld Ventures. This policy is not
        applicable to any information collected offline or via channels other
        than this website.
      </p>

      {/* DATA PROCESSING */}
      <h2 className="pb-4 text-2xl text-buff-400">Data Processing Location</h2>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures processes and stores data primarily in the European
        Union through our service provider Vercel. However, some of our
        third-party service providers may process data in other locations. When
        we transfer data outside the EU/EEA, we ensure appropriate safeguards
        are in place through:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">
          Standard contractual clauses approved by the European Commission
        </li>
        <li className="pb-2">
          Working only with providers that maintain adequate data protection
          measures
        </li>
        <li className="pb-2">
          Ensuring transparency about data processing locations
        </li>
      </ul>

      {/* PRIVACY RIGHTS */}
      <h2 className="pb-4 text-2xl text-buff-400">Your Privacy Rights</h2>
      <p className="pb-8 text-steel-blue-600">
        Under data protection laws, you have rights that you can exercise at any
        time. These include:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">
          <strong>Right to Access:</strong> You can request a copy of your
          personal data.
        </li>
        <li className="pb-2">
          <strong>Right to Rectification:</strong> You can ask us to correct or
          complete any inaccurate or incomplete data.
        </li>
        <li className="pb-2">
          <strong>Right to Erasure:</strong> You can ask us to delete your
          personal data in certain circumstances.
        </li>
        <li className="pb-2">
          <strong>Right to Restrict Processing:</strong> You can ask us to limit
          how we use your data.
        </li>
        <li className="pb-2">
          <strong>Right to Data Portability:</strong> You can request a copy of
          your data in a machine-readable format.
        </li>
        <li className="pb-2">
          <strong>Right to Object:</strong> You can object to our processing of
          your data for certain purposes.
        </li>
      </ul>

      {/* DATA RETENTION */}
      <h2 className="pb-4 text-2xl text-buff-400">Data Retention</h2>
      <p className="pb-8 text-steel-blue-600">
        We retain different types of data for different periods based on our
        legitimate business needs and legal requirements. Here&apos;s how long
        we typically keep your data:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">
          <strong>Server Logs:</strong> 30 days for security and debugging
          purposes
        </li>
        <li className="pb-2">
          <strong>Contact Form Submissions:</strong> 2 years from submission
          date
        </li>
      </ul>

      {/* DATA PROCESSING ACTIVITIES */}
      <h2 className="pb-4 text-2xl text-buff-400">Data Processing Activities</h2>
      <p className="pb-8 text-steel-blue-600">We process your data for the following purposes:</p>
      <div className="overflow-x-auto pb-8">
        <table className="w-full border-collapse text-steel-blue-400">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Purpose</th>
              <th className="text-left p-2">Data Types</th>
              <th className="text-left p-2">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Security</td>
              <td className="p-2">IP address, access logs</td>
              <td className="p-2">Legal obligation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AUTOMATED DECISIONS */}
      <h2 className="pb-4 text-2xl text-buff-400">Automated Decision Making</h2>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures does not engage in automated decision-making or
        profiling that produces legal effects or similarly significant impacts
        on our users.
      </p>

      {/* SPECIAL CATEGORIES */}
      <h2 className="pb-4 text-2xl text-buff-400">Special Categories of Personal Data</h2>
      <p className="pb-8 text-steel-blue-600">
        Wupperfeld Ventures does not intentionally collect or process any
        special categories of personal data (also known as sensitive personal
        data), including:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">Racial or ethnic origin</li>
        <li className="pb-2">Political opinions</li>
        <li className="pb-2">Religious or philosophical beliefs</li>
        <li className="pb-2">Trade union membership</li>
        <li className="pb-2">Genetic or biometric data</li>
        <li className="pb-2">Health data</li>
        <li className="pb-2">
          Data concerning a person&apos;s sex life or sexual orientation
        </li>
      </ul>
      <p className="pb-8 text-steel-blue-600">
        If you inadvertently submit any such information to us, we will delete
        it as soon as we become aware of its presence in our systems.
      </p>

      {/* CHANGES */}
      <h2 className="pb-4 text-2xl text-buff-400">Changes to This Privacy Policy</h2>
      <p className="pb-8 text-steel-blue-600">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal, operational, or regulatory reasons. When
        we make significant changes, we will:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">
          Update the &quot;Last Updated&quot; date at the top of this policy
        </li>
        <li className="pb-2">
          Post a notice on our website or send you an email (for significant
          changes)
        </li>
        <li className="pb-2">Keep previous versions available upon request</li>
      </ul>
      <p className="pb-8 text-steel-blue-600">
        We encourage you to review this Privacy Policy periodically to stay
        informed about how we protect your data. Continued use of our services
        after any changes to this Privacy Policy will constitute your acceptance
        of such changes.
      </p>

      {/* CONTACT */}
      <h2 className="pb-4 text-2xl text-buff-400">Contact Us About Privacy</h2>
      <p className="pb-8 text-steel-blue-600">
        For any privacy-related inquiries or to exercise your privacy rights,
        please contact us at:
      </p>
      <ul className="list-disc pl-8 pb-8 text-steel-blue-400">
        <li className="pb-2">Email: tobias@wupperfeld.org</li>
        <li className="pb-2">
          Response Time: We aim to respond to all privacy-related requests
          within 30 days
        </li>
      </ul>

      {/* CONSENT */}
      <h2 className="pb-4 text-2xl text-buff-400">Consent</h2>
      <p className="text-steel-blue-600">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Wupperfeld Ventures Privacy Policy',
    description:
      'We are committed to protecting your privacy and ensuring the security of your personal data.',
    robots: { index: false, follow: false },
    openGraph: {
      title: 'Wupperfeld Ventures Privacy Policy',
      description:
        'We are committed to protecting your privacy and ensuring the security of your personal data.',
      type: 'website',
      images: [
        {
          url: '/wv_logo.webp',
          width: 1730,
          height: 744,
          alt: 'Wupperfeld Ventures Logo',
        },
      ],
      url: 'https://www.wupperfeld.org/privacy',
      siteName: 'Wupperfeld Ventures Privacy Policy',
    },
  };
}
