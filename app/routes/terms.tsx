import type { Route } from "./+types/terms";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "~/components/legal/legal-page";

const SITE_URL = "https://applywithiris.com";
const TITLE = "Terms of Use — Iris Apply";
const DESCRIPTION =
  "Terms of Use for Iris Apply, including an important disclaimer of liability for errors caused by using the app.";
const LAST_UPDATED = "August 15, 2026";
const CONTACT_EMAIL = "somtochukwujf@gmail.com";

export function meta({}: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/terms` },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/terms` },
    { property: "og:site_name", content: "Iris Apply" },
  ];
}

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Agreement">
        <p>
          These Terms of Use (“Terms”) govern your access to Iris Apply
          (“Iris,” “we,” “us”), including applywithiris.com, the web app at
          app.applywithiris.com, and related browser tools. By creating an
          account or using Iris, you agree to these Terms and to our{" "}
          <a
            href="/privacy"
            className="text-purple-700 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          . If you do not agree, do not use the service.
        </p>
      </LegalSection>

      <LegalSection title="2. The service">
        <p>
          Iris helps you store a job-application profile and resume, generate
          answers and cover letters, and automate applications on third-party
          job sites. The service uses software, browsers, and artificial
          intelligence. It is provided as-is and may change, pause, or stop at
          any time.
        </p>
      </LegalSection>

      <LegalSection title="3. Your account">
        <p>
          You must provide accurate registration information and keep your
          password confidential. You are responsible for activity under your
          account. Notify us promptly if you believe your account has been
          misused. We may suspend or close accounts that violate these Terms or
          that we reasonably believe create risk for Iris or others.
        </p>
      </LegalSection>

      <LegalSection title="4. Your responsibilities">
        <p>You agree that:</p>
        <LegalList
          items={[
            "You will only use Iris for lawful job-seeking on your own behalf (or with clear authorization from the person whose application you are submitting).",
            "Information you provide (profile, resume, answers) is accurate to the best of your knowledge.",
            "You are solely responsible for reviewing applications, answers, cover letters, and submissions before and after Iris acts. Automation can skip, mistype, or submit the wrong information.",
            "You will comply with employer and job-site terms, including any rules against automated access. Some sites may block, throttle, or ban automated tools.",
            "You will not misuse Iris, attempt to disrupt it, scrape it, or use it to spam employers or submit applications you are not authorized to make.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. No warranty — you use Iris at your own risk">
        <p>
          Iris, including its AI, browser automation, captcha handling, and
          generated content, can be wrong, incomplete, delayed, or fail without
          notice. Job sites change. Captchas, logins, required fields, and
          uploads may not work. Applications may be filled incorrectly,
          submitted incorrectly, submitted more than once, not submitted at all,
          or submitted with answers you would not have chosen.
        </p>
        <p>
          To the maximum extent permitted by law, Iris is provided{" "}
          <strong className="text-ink">“as is” and “as available”</strong>{" "}
          without warranties of any kind, whether express, implied, or
          statutory, including merchantability, fitness for a particular
          purpose, accuracy, and non-infringement. We do not warrant that Iris
          will obtain interviews, offers, or any employment outcome, or that it
          will operate without error or interruption.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of liability">
        <p>
          <strong className="text-ink">
            You agree that we are not liable for any errors caused by using the
            app.
          </strong>{" "}
          To the maximum extent permitted by law, Iris and its operator will not
          be liable for any indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for any loss of profits,
          opportunity, data, goodwill, or employment prospects, arising out of
          or related to your use of Iris — including without limitation:
        </p>
        <LegalList
          items={[
            "Incorrect, missing, or unwanted answers, cover letters, or form submissions.",
            "Failed, duplicate, late, or incomplete applications.",
            "Missed deadlines, rejected applications, or lost job opportunities.",
            "Job-site changes, captchas, blocks, account bans, or outages.",
            "AI mistakes, automation mistakes, bugs, downtime, or data loss.",
          ]}
        />
        <p>
          Our total liability for any claim arising out of these Terms or the
          service will not exceed the amount you paid us for Iris in the three
          months before the claim, or fifty U.S. dollars (US $50) if you have
          paid nothing. Some places do not allow certain limitations; in those
          places, our liability is limited to the fullest extent allowed.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party sites">
        <p>
          Applications are submitted to employers and platforms we do not
          control. Their terms and privacy practices apply to those
          interactions. We are not responsible for third-party sites, hiring
          decisions, or how employers use information you submit through Iris.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual property">
        <p>
          Iris and its branding, software, and site content belong to us or our
          licensors. You retain rights in your resume, profile, and other
          content you upload. You grant us a license to use that content solely
          to operate the service (including generating answers and submitting
          applications you request).
        </p>
      </LegalSection>

      <LegalSection title="9. Changes and termination">
        <p>
          We may update these Terms. The “Last updated” date will change when we
          do. Continued use after a change means you accept the new Terms. You
          may stop using Iris at any time. We may stop providing the service or
          terminate access with or without notice.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these Terms:{" "}
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
