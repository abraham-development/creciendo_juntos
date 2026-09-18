import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import {
  ADDRESS,
  BRAND,
  LOGO_ALT,
  NAV,
  PRIMARY_WHATSAPP,
  SLOGAN,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-violet-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-x-10 gap-y-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.35fr_0.65fr_0.9fr_0.8fr] lg:py-20">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logotipo.jpeg"
                alt={LOGO_ALT}
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-xl font-medium tracking-[-0.025em]">
                {BRAND}
              </span>
            </Link>
            <p className="mt-6 max-w-[27ch] font-display text-2xl leading-snug tracking-[-0.025em] text-paper">
              {SLOGAN}
            </p>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-paper/65">
              Psicología y estimulación temprana para acompañar a niños,
              adolescentes y familias.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-sm font-medium tracking-[0.06em] text-paper">
              Explorar
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium tracking-[0.06em] text-paper">
              Ubicación
            </h2>
            <address className="mt-5 not-italic">
              <p className="max-w-[23ch] text-sm leading-relaxed text-paper/75">
                {ADDRESS.line}
              </p>
              <p className="mt-2 text-sm text-paper/55">{ADDRESS.note}</p>
              <a
                href={ADDRESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper"
              >
                Ver en Google Maps
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-[0.06em] text-paper">
              Contacto
            </h2>
            <a
              href={PRIMARY_WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-paper/25 px-4 py-2.5 text-sm text-paper transition-colors hover:border-paper hover:bg-paper hover:text-violet-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
            <ul
              className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-paper/45"
              aria-label="Redes sociales"
            >
              <li>
                <span
                  className="inline-flex items-center gap-2"
                  title="Enlace de Facebook pendiente"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </span>
              </li>
              <li>
                <span
                  className="inline-flex items-center gap-2"
                  title="Enlace de Instagram pendiente"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper/15 py-6 text-xs leading-relaxed text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND}. Todos los derechos reservados.
          </p>
          <p>Centro de psicología y estimulación temprana.</p>
        </div>
      </div>
    </footer>
  );
}
