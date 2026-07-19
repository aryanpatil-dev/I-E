import { Instagram, Linkedin, Mail, MapPin, Youtube } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/iandecell_ace/' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/atharva-college-of-engineering-s-innovation-entrepreneurship-cell/' },
  { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/' },
  { label: 'Mail', icon: Mail, href: 'mailto:iecellevents@example.edu' },
];

export default function Footer() {
  return (
    <footer className="border-t border-electric/10 bg-cloud text-ink">
      <div className="page-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow">Atharva Educational Trust</p>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-muted">
              Atharva Educational Trust believes in producing well-disciplined, practical-oriented,
              highly knowledgeable engineers who serve society and the nation.
            </p>
          </div>

          <address className="not-italic text-sm leading-7 text-muted">
            <div className="mb-3 flex items-center gap-2 font-semibold text-ink">
              <MapPin className="size-4 text-flare" aria-hidden="true" />
              Campus Address
            </div>
            Atharva College Campus, Malad Marve Road,
            <br />
            Charkop Naka, Malad West,
            <br />
            Mumbai, Maharashtra 400095
          </address>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink">Social</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-lg border border-electric/10 bg-mist text-electric transition hover:border-flare/70 hover:bg-flare hover:text-ink hover:shadow-dropglow"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-electric/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 ACE I&E Cell. Built for innovators, makers, and founders.</p>
          <p>Innovation. Incubation. Entrepreneurship.</p>
        </div>
      </div>
    </footer>
  );
}
