import Image from "next/image";
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

        <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-16">
          <div className="grid gap-4 sm:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1fr)] sm:items-end sm:gap-10">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink sm:text-3xl">
              Cómo llegar
            </h2>
            <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink/70">
              Toma la Universidad Tecnológica del Perú como referencia.
              Creciendo Juntos se encuentra en la Av. Circunvalación 595, 2.º
              piso.
            </p>
          </div>

          <a
            href={ADDRESS.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir la ubicación de Creciendo Juntos en Google Maps"
            className="group mt-8 block overflow-hidden bg-paper-2 focus-visible:outline-offset-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
              <Image
                src="/ubicacion/mapa-creciendo-juntos.png"
                alt="Mapa que señala Creciendo Juntos en la avenida Circunvalación 595, con la UTP como referencia cercana"
                width={1044}
                height={896}
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="h-full w-full origin-top-right scale-[1.4] object-cover object-[90%_0%] transition-transform duration-500 group-hover:scale-[1.42] sm:h-auto sm:origin-center sm:scale-100 sm:object-contain sm:group-hover:scale-[1.01]"
              />
            </div>
          </a>
          <p className="mt-3 text-sm text-ink/60">
            Selecciona el mapa para abrir la ubicación en Google Maps.
          </p>
        </div>
      </div>
    </section>
  );
}
