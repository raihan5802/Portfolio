import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  CONTACT_PORTFOLIO,
} from "@/lib/contact";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_LOCATION,
  },
] as const;

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: CONTACT_GITHUB,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: CONTACT_LINKEDIN,
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: CONTACT_PORTFOLIO,
  },
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-white/10 bg-black/20 px-6 pb-10 pt-28 backdrop-blur-sm sm:scroll-mt-32 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-[#0080B0] sm:text-3xl lg:text-4xl">
          Always happy to connect and chat.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <ul className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0080B0]/15 text-[#0080B0]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-[#DCDFD2] sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="contact-detail-card flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-[#0080B0]/45"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="contact-detail-card flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-sm">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div>
              <p className="mb-4 text-sm font-semibold text-[#DCDFD2]">
                Connect With Me
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  const isInternal = link.href.startsWith("#");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noopener noreferrer"}
                      aria-label={link.label}
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#111827]/80 text-[#94A3B8] transition-all duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15 hover:text-[#DCDFD2]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <p className="mt-10 text-center text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} MD Raihan Chowdhury
        </p>
      </div>
    </section>
  );
}
