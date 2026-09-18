import Link from "next/link";
import { BRAND } from "@/lib/site";

export const metadata = {
  title: `Iniciar sesión · ${BRAND}`,
};

export default function IniciarSesionPage() {
  return (
    <main
      id="contenido"
      className="mx-auto flex min-h-[calc(100svh-16rem)] w-full max-w-xl flex-col justify-center px-5 py-16"
    >
      <h1 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink sm:text-4xl">
        Iniciar sesión
      </h1>
      <p className="mt-5 max-w-[55ch] text-[1.0625rem] leading-relaxed text-ink/75">
        Este acceso es solo para el administrador de Creciendo Juntos. No es
        una cuenta para familias ni visitantes.
      </p>
      <p className="mt-4 max-w-[55ch] leading-relaxed text-ink/70">
        El ingreso al área privada (comprobantes y SUNAT) se habilitará más
        adelante. Todavía no hay autenticación.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit border border-ink px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
