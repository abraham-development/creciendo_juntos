import type { Metadata } from "next";
import { Contacto } from "@/components/Contacto";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `Ubicación y Contacto · ${BRAND}`,
  description:
    "Encuentra nuestra ubicación y escríbenos por WhatsApp a Creciendo Juntos.",
  alternates: { canonical: "/ubicacion" },
};

export default function UbicacionPage() {
  return (
    <main id="contenido">
      <Contacto />
    </main>
  );
}
