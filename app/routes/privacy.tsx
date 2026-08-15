import type { Route } from "./+types/privacy";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "~/components/legal/legal-page";

const SITE_URL = "https://applywithiris.com";
const TITLE = "Privacy Policy — Iris Apply";
const DESCRIPTION =
  "How Iris Apply collects, uses, and shares information when you use our job application tools.";
const LAST_UPDATED = "August 15, 2026";
const CONTACT_EMAIL = "somtochukwujf@gmail.com";

export function meta({}: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/privacy` },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/privacy` },
    { property: "og:site_name", content: "Iris Apply" },
  ];
}

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Who we are">
        <p>
          Iris Apply (“Iris,” “we,” “us”) operates applywithiris.com, the web
          app at app.applywithiris.com, and related browser tools. This policy
          explains what information we collect and how we use it when you create
          an account, store an application profile, upload a resume, or let Iris
          apply to jobs on your behalf.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>Depending on how you use Iris, we may collect:</p>
        <LegalList
          items={[
            <>
              <strong className="text-ink">Account information:</strong> first
              name, last name, email address, and a hashed password.
            </>,
            <>
              <strong className="text-ink">Application profile:</strong> contact
              details (phone, address, city, state, postal code, country), work
              preferences (salary range, notice period, relocation, working
              arrangement), professional links (LinkedIn, portfolio), language
              proficiencies, and information some employers request such as
              citizenship, veteran status, gender, ethnicity, and date of birth.
              You choose what to provide; some of this is sensitive.
            </>,
            <>
              <strong className="text-ink">Resumes and documents:</strong> files
              you upload, extracted text, file names, and storage keys.
            </>,
            <>
              <strong className="text-ink">Job applications:</strong> job URLs,
              application status, generated answers, cover letters, and other
              form data used to fill or submit applications.
            </>,
            <>
              <strong className="text-ink">Usage and session data:</strong> a
              session cookie used to keep you signed in, plus product analytics
              (for example via PostHog) such as events, device, and approximate
              location derived from IP.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. How we use information">
        <p>We use this information to:</p>
        <LegalList
          items={[
            "Create and secure your account.",
            "Fill and submit job applications using your profile, resume, and generated answers.",
            "Draft cover letters and application responses with AI models.",
            "Operate browser automation on third-party job sites, including solving supported captchas when needed to complete a form.",
            "Improve reliability, debug failures, and understand how the product is used.",
            "Respond to your questions and enforce our Terms of Use.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. How we share information">
        <p>
          We share information when it is needed to run the service, not to sell
          your data:
        </p>
        <LegalList
          items={[
            <>
              <strong className="text-ink">Employers and job sites:</strong>{" "}
              when you apply through Iris, we send the information required by
              that application (which may include resume contents and profile
              answers) to the employer or their applicant-tracking system.
            </>,
            <>
              <strong className="text-ink">AI and automation vendors:</strong>{" "}
              we send prompts and relevant profile, resume, and page context to
              language-model providers so Iris can generate answers and decide
              what to do on a page. Captcha-solving and browser-automation
              providers may receive page or challenge data needed to complete a
              step.
            </>,
            <>
              <strong className="text-ink">Infrastructure:</strong> hosting,
              database, file storage, workflow, and analytics providers that
              process data on our behalf.
            </>,
            <>
              <strong className="text-ink">Legal requests:</strong> if we are
              required by law, or need to protect Iris, our users, or others.
            </>,
          ]}
        />
        <p>
          Third-party job sites, employers, and vendors have their own privacy
          practices. Once information is submitted to an employer, we do not
          control how they use it.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p>
          We use a session cookie to authenticate you. It is HttpOnly and is
          set when you log in. We also use analytics cookies or similar
          technologies (including PostHog) to understand product usage. You can
          block cookies in your browser, but the app will not stay signed in
          without the session cookie.
        </p>
      </LegalSection>

      <LegalSection title="6. Retention">
        <p>
          We keep account, profile, resume, and application data while your
          account is active so we can provide the service and show application
          history. If you ask us to delete your account, we will delete or
          de-identify personal data we control, except where we must retain
          records (for example security logs, billing, or legal obligations).
          Data already submitted to employers cannot be recalled by us.
        </p>
      </LegalSection>

      <LegalSection title="7. Your choices">
        <p>
          You can update your profile and resumes in the app. To request access,
          correction, or deletion of personal data we hold, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-700 underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . Depending on where you live, you may have additional rights under
          applicable privacy law. We will not discriminate against you for
          exercising those rights.
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          We use reasonable measures such as hashed passwords, HTTPS, and
          HttpOnly cookies. No method of transmission or storage is completely
          secure. You are responsible for keeping your password confidential.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          Iris is for adults seeking employment. We do not knowingly collect
          personal information from children under 16. If you believe a child
          has created an account, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes">
        <p>
          We may update this policy from time to time. The “Last updated” date
          at the top will change when we do. Continued use of Iris after a
          change means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact">
        <p>
          Questions about this policy or your data:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-700 underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
