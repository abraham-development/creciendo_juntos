import type { Metadata } from "next";
import { Nosotros } from "@/components/Nosotros";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `Nosotros · ${BRAND}`,
  description:
    "Centro de psicología y estimulación temprana. Acompañamos el desarrollo de niños, adolescentes y familias.",
};

export default function NosotrosPage() {
  return (
    <main id="contenido">
      <Nosotros />
    </main>
  );
}
