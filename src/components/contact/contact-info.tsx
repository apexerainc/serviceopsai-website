import { Mail, Phone, MapPin, Clock } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@serviceopsai.com",
    href: "mailto:hello@serviceopsai.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(512) 555-0147",
    href: "tel:+15125550147",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "100 Congress Ave, Suite 400\nAustin, TX 78701",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday\n8:00 AM - 6:00 PM CST",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <p className="mt-2 text-text-secondary">
          Have questions? We&apos;d love to hear from you. Send us a message
          and we&apos;ll respond within 24 hours.
        </p>
      </div>
      <div className="space-y-5">
        {CONTACT_DETAILS.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
              <detail.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-sm text-text-secondary hover:text-primary"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary whitespace-pre-line">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
