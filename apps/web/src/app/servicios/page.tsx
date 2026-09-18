import type { Metadata } from "next";
import { Servicios } from "@/components/Servicios";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `Servicios · ${BRAND}`,
  description:
    "Psicología infantil, estimulación temprana y orientación familiar en Creciendo Juntos.",
};

export default function ServiciosPage() {
  return (
    <main id="contenido">
      <Servicios />
    </main>
  );
}
