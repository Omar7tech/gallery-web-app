import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Solera collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        updated="June 2026"
        crumbLabel="Privacy Policy"
        crumbHref="/privacy-policy"
        intro="We collect as little as we can, keep it only as long as we need to, and never sell it. This page explains exactly what we hold and why."
        sections={[
          {
            heading: "What we collect",
            paras: [
              "When you contact us, request a quote, or book a consultation, we collect the details you give us - your name, email, phone number, project location, and anything you choose to tell us about your space.",
              "When you browse, we use a small number of functional cookies and privacy-respecting analytics to understand how the site is used. We do not run advertising trackers.",
            ],
          },
          {
            heading: "How we use it",
            paras: [
              "We use your information solely to respond to your enquiry, prepare quotes, fulfil orders, and - if you've opted in - send you our seasonal newsletter. That's the entire list.",
              "Your wishlist and recently-viewed items are stored only in your own browser. They never reach our servers.",
            ],
          },
          {
            heading: "Who we share it with",
            paras: [
              "We share information only with the partners required to serve you - for example, white-glove delivery firms - and only the minimum they need. We never sell or rent your data to anyone.",
            ],
          },
          {
            heading: "Your rights",
            paras: [
              "You can ask us at any time to show you, correct, or delete the information we hold about you, and to unsubscribe from any communications. We'll act within 30 days.",
              `To make a request, email ${SITE.email}.`,
            ],
          },
          {
            heading: "Data security & retention",
            paras: [
              "We protect your information with industry-standard safeguards and keep it only as long as needed to serve you or meet legal obligations, after which it is deleted.",
            ],
          },
        ]}
      />
    </>
  );
}
