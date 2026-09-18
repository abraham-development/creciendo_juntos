import { WhatsAppCta } from "@/components/WhatsAppCta";
import { ADDRESS } from "@/lib/site";

export function Contacto() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h1 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink sm:text-4xl">
          Ubicación y Contacto
        </h1>
        <div className="mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              Dirección
            </h2>
            <p className="mt-4 max-w-[22ch] font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[1.75rem]">
              {ADDRESS.line}
            </p>
            <p className="mt-3 text-ink/70">{ADDRESS.note}</p>
            <a
              href={ADDRESS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-violet underline decoration-violet/30 underline-offset-4 hover:decoration-violet"
            >
              Ver en el mapa
            </a>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              WhatsApp
            </h2>
            <p className="mt-4 max-w-[40ch] text-[1.0625rem] leading-relaxed text-ink/70">
              Escríbenos. Conversamos por WhatsApp sobre el servicio que
              necesitas.
            </p>
            <WhatsAppCta className="mt-6">Escribir por WhatsApp</WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}
