"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export function Nosotros() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    let frame = 0;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const syncMotion = () => {
      frame = 0;

      if (motionPreference.matches) {
        page.style.setProperty("--nosotros-shift", "0%");
        page.style.setProperty("--nosotros-scale", "1");
        return;
      }

      const rect = page.getBoundingClientRect();
      const stickyHeaderHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const travel = Math.max(
        page.offsetHeight - window.innerHeight + stickyHeaderHeight,
        1,
      );
      const progress = Math.min(
        1,
        Math.max(0, (stickyHeaderHeight - rect.top) / travel),
      );

      page.style.setProperty(
        "--nosotros-shift",
        `${(-progress * 2.8).toFixed(2)}%`,
      );
      page.style.setProperty(
        "--nosotros-scale",
        (1.035 + progress * 0.045).toFixed(4),
      );
    };

    const requestSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncMotion);
    };

    syncMotion();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);
    motionPreference.addEventListener("change", requestSync);

    return () => {
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
      motionPreference.removeEventListener("change", requestSync);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="nosotros-stage lg:grid lg:grid-cols-[minmax(17rem,0.4fr)_minmax(0,1fr)] lg:items-start"
    >
      <figure className="nosotros-portrait relative isolate m-0 h-[48vh] min-h-[18rem] overflow-hidden bg-violet-deep lg:sticky lg:top-[6.75rem] lg:h-[calc(100svh-6.75rem)] lg:min-h-0">
        <div className="nosotros-photo-motion absolute inset-0">
          <Image
            src="/nosotros/imagen-nosotros.jpeg"
            alt="Retrato ilustrado del equipo de Creciendo Juntos en el centro"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="nosotros-photo-enter object-cover object-[center_16%]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-t from-violet-deep/70 via-transparent to-violet-deep/10"
        />

        <figcaption className="nosotros-caption absolute bottom-7 left-5 z-20 max-w-[15rem] text-paper sm:bottom-10 sm:left-8">
          <span
            aria-hidden="true"
            className="mb-4 block h-px w-10 bg-orange"
          />
          <span className="font-display text-xl leading-snug tracking-[-0.02em] sm:text-2xl">
            Cuidado, familia e infancia.
          </span>
        </figcaption>

        <div aria-hidden="true" className="nosotros-curtain absolute inset-0 z-30" />
      </figure>

      <article className="bg-paper px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
        <div className="mx-auto max-w-[36rem]">
          <h1 className="font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-ink sm:text-[3.25rem]">
            Nosotros
          </h1>
          <p className="mt-8 text-[1.125rem] leading-[1.75] text-ink/78">
            Somos profesionales de la psicología comprometidos con el
            desarrollo y el bienestar de niños, adolescentes y sus familias.
            Brindamos el apoyo psicológico y la estimulación que cada etapa
            necesita, con una atención cercana, responsable y respetuosa.
          </p>

          <div className="mt-12 space-y-5 text-[1.0625rem] leading-[1.8] text-ink/78">
            <p>
              En Creciendo Juntos sabemos que pedir orientación es un paso
              importante. Por eso escuchamos cada situación con cuidado y
              acompañamos a las familias con claridad, calidez y criterio
              profesional.
            </p>
            <p>
              Nuestro propósito es ofrecer un espacio de confianza donde
              puedan comprender sus necesidades y encontrar el acompañamiento
              adecuado.
            </p>
          </div>

          <h2 className="mt-16 font-display text-[1.65rem] font-medium tracking-[-0.03em] text-ink sm:text-[1.85rem]">
            Servicios para acompañarlos
          </h2>
          <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.8] text-ink/78">
            <p>
              Ofrecemos evaluación del desarrollo, estimulación e intervención
              temprana, atención psicológica para niños y adolescentes, además
              de orientación familiar.
            </p>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <p className="max-w-[36ch] text-[1.0625rem] leading-relaxed text-ink/70">
              Conoce todas las opciones de atención o escríbenos si necesitas
              orientación para elegir un servicio.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Link
                href="/servicios"
                className="text-sm font-medium text-violet underline decoration-violet/30 underline-offset-4 transition-colors hover:text-violet-deep hover:decoration-violet-deep"
              >
                Ver todos los servicios
              </Link>
              <WhatsAppCta>Consultar por WhatsApp</WhatsAppCta>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
