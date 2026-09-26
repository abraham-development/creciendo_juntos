"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { BRAND, NAV } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logotipo.jpeg"
              alt=""
              width={56}
              height={56}
              className="h-11 w-11 shrink-0 rounded-xl object-contain sm:h-12 sm:w-12"
              priority
            />
            <span className="sr-only font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink sm:not-sr-only sm:inline sm:truncate sm:text-lg">
              {BRAND}
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/iniciar-sesion"
              className="hidden text-sm text-ink/65 transition-colors hover:text-ink md:inline"
            >
              Iniciar sesión
            </Link>
            <WhatsAppCta compact>WhatsApp</WhatsAppCta>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] text-ink transition-colors hover:bg-paper-2 md:hidden"
              aria-expanded={open}
              aria-controls="nav-principal"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">
                {open ? "Cerrar menú" : "Abrir menú"}
              </span>
              <span aria-hidden className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <nav
        id="nav-principal"
        className="bg-violet-deep text-paper"
        aria-label="Secciones"
      >
        <div
          className={`mx-auto max-w-6xl px-4 sm:px-6 ${open ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col py-2 md:h-11 md:flex-row md:items-center md:gap-1 md:py-0">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-[var(--radius-control)] px-3 py-2.5 text-[0.8125rem] tracking-[0.02em] transition-colors md:py-1.5 ${
                      active
                        ? "bg-paper/12 font-medium text-paper"
                        : "text-paper/80 hover:bg-paper/8 hover:text-paper"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="md:hidden">
              <Link
                href="/iniciar-sesion"
                className="block rounded-[var(--radius-control)] px-3 py-2.5 text-[0.8125rem] tracking-[0.02em] text-paper/80"
                onClick={() => setOpen(false)}
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
