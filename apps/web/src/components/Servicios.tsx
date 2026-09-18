import Image from "next/image";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { SERVICE_GROUPS } from "@/lib/site";

export function Servicios() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:items-end lg:gap-16 lg:py-28">
          <h1 className="max-w-[13ch] font-display text-[2.75rem] font-medium leading-[1.06] tracking-[-0.04em] text-ink sm:text-6xl lg:col-span-7">
            Servicios para acompañar su desarrollo y bienestar
          </h1>
          <div className="max-w-[52ch] lg:col-span-5 lg:pb-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/75 sm:text-lg">
              Trabajamos con niños, adolescentes y familias desde la psicología
              y la estimulación temprana, con atención cercana a las
              necesidades de cada etapa.
            </p>
            <WhatsAppCta className="mt-7">
              Consultar por un servicio
            </WhatsAppCta>
          </div>
        </div>
      </section>

      <div>
        {SERVICE_GROUPS.map((group, index) => {
          const dark = index === 2;
          const reverse = index === 1;

          return (
            <section
              key={group.title}
              className={
                dark
                  ? "bg-violet-deep text-paper"
                  : index === 0
                    ? "bg-paper-2 text-ink"
                    : "bg-paper text-ink"
              }
            >
              <div className="mx-auto grid max-w-6xl lg:min-h-[36rem] lg:grid-cols-2">
                <div
                  className={`relative min-h-[19rem] overflow-hidden sm:min-h-[28rem] lg:min-h-full ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={group.image.src}
                    alt={group.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center px-4 py-14 sm:px-10 sm:py-20 lg:px-16 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <h2 className="max-w-[13ch] font-display text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                    {group.title}
                  </h2>
                  <p
                    className={`mt-5 max-w-[48ch] text-[1.0625rem] leading-relaxed ${
                      dark ? "text-paper/75" : "text-ink/68"
                    }`}
                  >
                    {group.description}
                  </p>

                  <ul
                    className={`mt-9 border-t ${
                      dark ? "border-paper/20" : "border-ink/15"
                    }`}
                  >
                    {group.services.map((service) => (
                      <li
                        key={service.title}
                        className={`py-4 text-[1.0625rem] leading-snug ${
                          dark
                            ? "border-b border-paper/20 text-paper"
                            : "border-b border-ink/15 text-ink"
                        }`}
                      >
                        {service.title}
                        {"note" in service ? (
                          <span
                            className={`mt-1 block text-sm ${
                              dark ? "text-paper/60" : "text-ink/55"
                            }`}
                          >
                            {service.note}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-paper/15 bg-violet-deep text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <h2 className="max-w-[16ch] font-display text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl lg:col-span-7">
            ¿No sabes qué servicio necesitas?
          </h2>
          <div className="lg:col-span-5">
            <p className="max-w-[47ch] text-[1.0625rem] leading-relaxed text-paper/75">
              Cuéntanos brevemente qué estás buscando y conversemos por
              WhatsApp.
            </p>
            <WhatsAppCta className="mt-6">Escribir por WhatsApp</WhatsAppCta>
          </div>
        </div>
      </section>
    </>
  );
}
