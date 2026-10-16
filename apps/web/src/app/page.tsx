import type { Metadata } from "next";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="contenido">
      <HeroCarousel />
    </main>
  );
}
