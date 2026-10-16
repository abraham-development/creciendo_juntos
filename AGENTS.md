# AGENTS.md

Memoria persistente y manual operativo para los agentes de IA que trabajan en este repositorio. Complementa el README y `PRODUCT.md`; no los reemplaza.

## Cómo usar esta memoria

Al iniciar una sesión:

1. Leer este archivo completo antes de proponer o modificar código.
2. Leer el `AGENTS.md` más cercano al área que se vaya a tocar. En `apps/web`, sus reglas de Next.js también son obligatorias.
3. Revisar `git status --short` y `git log -5 --oneline` para no confundir trabajo previo del usuario con trabajo propio.
4. Leer **Relevo de la última sesión**, **Decisiones abiertas** y los documentos que allí se indiquen.
5. Confirmar en el código cualquier dato que pueda haber quedado obsoleto. Esta memoria orienta; el repositorio confirma el estado ejecutable.

Al terminar una sesión con cambios relevantes:

1. Actualizar las secciones afectadas de este archivo, no solo el bloque de relevo.
2. Registrar decisiones duraderas en **Registro de decisiones** con fecha, decisión y motivo.
3. Dejar en **Relevo de la última sesión** qué se hizo, qué se validó, qué quedó pendiente y qué cambios ajenos deben preservarse.
4. Usar fechas absolutas (`AAAA-MM-DD`), rutas concretas y comandos de verificación exactos.
5. Borrar o corregir información reemplazada; no acumular instrucciones contradictorias ni convertir este archivo en un diario.

No guardar aquí secretos, tokens, números de contacto privados, contenido completo de archivos `.env`, datos personales ni razonamientos internos. Tampoco registrar como hecho una suposición sin confirmar: etiquetarla como **supuesto** o dejarla en **Decisiones abiertas**.

### Orden de autoridad

Cuando dos fuentes discrepen, usar este orden:

1. Instrucción explícita y vigente del usuario.
2. Código, configuración y assets actuales del repositorio.
3. `PRODUCT.md` para verdad de producto y alcance.
4. Este `AGENTS.md` para contexto operativo y continuidad.
5. README y documentación del área afectada.
6. `recursos_internos/Pompt_inicial.txt` como brief histórico.

Si la discrepancia afecta producto, marca, contacto o alcance, no resolverla inventando: señalarla y pedir confirmación cuando sea necesario.

## Proyecto

**Creciendo Juntos** es el sitio web público del centro de estimulación temprana y psicología infantil/familiar. El objetivo del repositorio es diseñar, construir y mantener ese sitio.

- Idioma de la interfaz y del copy: **español**.
- Nombre de marca: **Creciendo Juntos**. No abreviar, traducir ni renombrar.
- Texto del logo: **Creciendo Juntos A&N**.
- Usuario principal: padres, madres y cuidadores que buscan acompañamiento para niños, adolescentes y familias.
- Objetivo principal del sitio: explicar la propuesta del centro y llevar al visitante a contactar por WhatsApp.

La verdad de producto está en `PRODUCT.md`. No duplicar allí detalles técnicos salvo que cambien el alcance o la experiencia del producto.

## Estado actual confirmado

- Sitio público implementado en `apps/web` con Next.js App Router, TypeScript y Tailwind CSS.
- Dominio de producción: **https://creciendojuntos.site** (sin `www`). Vive en `SITE_URL` (`apps/web/src/lib/site.ts`) y alimenta `metadataBase`, las URLs canónicas, Open Graph, `robots.txt` y `sitemap.xml`. `www.creciendojuntos.site` redirige con 308 al dominio raíz desde `apps/web/next.config.mjs`. Si cambia el dominio, actualizar ambos lugares.
- Arquitectura multipágina: cada ítem del menú principal es una ruta de nivel superior, no un ancla de una sola landing.
- Header y footer globales, navegación con estado activo, menú móvil, enlace para saltar al contenido y metadata por página.
- Home con carrusel dinámico; páginas de servicios, nosotros y ubicación; entrada de administración todavía como placeholder.
- CTA público principal: WhatsApp. `NEXT_PUBLIC_WHATSAPP_NUMBER` es obligatorio y se lee desde el entorno; no escribir su valor en código ni en esta memoria.
- La ubicación usa dirección, enlace de Google Maps e imagen local del mapa. Verificar la fuente actual en `apps/web/src/lib/site.ts` y `apps/web/public/ubicacion/`.
- Diseño orientado a un centro de psicología: moderno, cálido, sereno y profesional; no una estética de entretenimiento infantil. Tokens en `globals.css` (fondo piedra fría, superficie blanca, violeta/naranja/teal del logo, radios suaves en controles).
- `apps/api` sigue siendo un placeholder. No implementar backend, auth o SUNAT hasta que el usuario lo pida.
- El build web usa `next build --webpack` por compatibilidad del despliegue previsto. No volver a Turbopack sin comprobar el entorno de hosting.
- Existe `apps/web/package-lock.json` además del lockfile de pnpm por compatibilidad con el flujo de despliegue mediante npm. No eliminarlo como “duplicado” sin revisar ese flujo.

## Rutas públicas

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Home con hero y carrusel dinámico | Implementada |
| `/servicios` | Lista agrupada de servicios | Implementada |
| `/nosotros` | Presentación del centro y su enfoque | Implementada; copy aún provisional |
| `/ubicacion` | Dirección, mapa y CTA de WhatsApp | Implementada |
| `/iniciar-sesion` | Entrada futura al área administrativa | Placeholder, sin auth |

La navegación vive en `NAV`, dentro de `apps/web/src/lib/site.ts`. El header usa `Link` de Next, `usePathname()` y `aria-current="page"`. Cada página debe conservar un único `<h1>`, un `<main id="contenido">` y metadata propia (`title`, `description` y `alternates.canonical` con su ruta relativa). No poner `canonical` en el layout: se heredaría a todas las páginas.

`/sitemap.xml` se genera desde `NAV` (`src/app/sitemap.ts`), así que una ruta nueva en `NAV` entra al sitemap automáticamente. `/iniciar-sesion` lleva `noindex` y está excluida en `src/app/robots.ts`.

## Stack y comandos

Monorepo con **pnpm + Turborepo**. Requiere Node.js 20 o superior.

```text
Instalar:         pnpm install
Desarrollar:      pnpm dev              # apps/web en http://localhost:3000
Build completo:   pnpm build
Lint completo:    pnpm lint
Build web:        pnpm --filter @creciendo-juntos/web build
Lint web:         pnpm --filter @creciendo-juntos/web lint
```

- `apps/web`: sitio público y entrega actual.
- `apps/api`: backend futuro; fuera de alcance mientras no se solicite.
- `packages/typescript-config`: configuración TypeScript compartida.
- `packages/eslint-config`: configuración ESLint compartida.

Antes de ejecutar build o desarrollo, comprobar que la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` esté disponible. Se permiten archivos de entorno locales ignorados por Git, pero nunca se deben mostrar ni registrar sus valores.

## Estructura relevante de `apps/web`

- `src/lib/site.ts`: marca, slogan, dominio (`SITE_URL`), descripción por defecto, WhatsApp, dirección, navegación, servicios y slides del hero.
- `src/app/robots.ts` y `src/app/sitemap.ts`: rutas de metadata para buscadores.
- `src/components/`: `SiteHeader`, `SiteFooter`, `HeroCarousel`, `Servicios`, `Nosotros`, `Contacto`, `WhatsAppCta` e iconos.
- `src/app/`: layout global, estilos globales y una carpeta `page.tsx` por ruta.
- `src/app/globals.css`: tokens de color, tipografía y estilos globales.
- `public/`: assets servidos por Next.
- `next.config.mjs`: configuración de Next.js (incluye la redirección `www` → dominio raíz).
- `apps/web/AGENTS.md`: reglas generadas para la versión instalada de Next.js; leerlas antes de modificar la app.

### Contexto para agentes y herramientas

- `.cursorignore` reduce el contexto indexado excluyendo assets binarios, builds, lockfiles y áreas todavía irrelevantes. Si un archivo ignorado es necesario en Cursor, referenciarlo de forma explícita con `@ruta`.
- La copia canónica de la skill Impeccable usada por Cursor está en `.cursor/skills/impeccable`; `.agents/` contiene una copia excluida del índice. No mantener ambas manualmente sin comprobar cómo se sincronizan.
- No modificar ni eliminar el bloque autogenerado de `apps/web/AGENTS.md`: Next.js puede volver a crearlo durante `next dev`.

### Assets

- Fuentes originales: `recursos_internos/` (logo, flyer, fotos y brief).
- Assets servidos: `apps/web/public/`.
- Logo: `public/logotipo.jpeg`.
- Carrusel: `public/hero/sala.jpeg`, `public/hero/estimulacion.png` y `public/hero/familia.png`.
- Servicios: `public/servicios/`.
- Nosotros: `public/nosotros/`.
- Ubicación: `public/ubicacion/mapa-creciendo-juntos.png`.

Después de añadir o reemplazar una imagen fuente, sincronizar la copia pública y actualizar las referencias o textos alternativos correspondientes. No tratar imágenes generadas como fotografías de clientes reales.

### Diseño

- Tipografía: **Literata** para display y **Karla** para cuerpo, mediante `next/font/google`.
- Paleta: violeta, naranja y teal derivados del logo, con fondos tipo papel y contraste legible.
- Para cambios grandes de UI, usar la skill Impeccable en modo **Persuade** y respetar `PRODUCT.md` y `DESIGN.md` si este último existe.
- No inventar una paleta, personalidad o mundo visual ajenos a la marca documentada.

## Reglas de trabajo

- Hacer cambios pequeños y concretos. No reescribir el sitio si basta un ajuste localizado.
- No inventar promesas, precios, testimonios, clientes, métricas, perfiles profesionales, información legal ni datos de contacto.
- Si falta copy real, conservarlo como provisional, marcar el pendiente o pedirlo al usuario.
- Al añadir una sección pública importante, preferir una ruta nueva bajo `src/app/` y una entrada en `NAV`.
- Mantener componentes pequeños, nombres claros y estilos cerca de la UI que afectan.
- Usar Tailwind CSS y los tokens existentes en `globals.css`.
- Mantener semántica HTML, jerarquía tipográfica, foco visible, textos alternativos y diseño responsive.
- Preservar los cambios existentes del usuario. No restaurar, limpiar, formatear masivamente ni incluir cambios ajenos sin permiso.
- No crear commits ni PRs salvo petición explícita.

### Verificación mínima

Para cambios de código, ejecutar al menos el lint del área afectada. Para cambios funcionales o de configuración, ejecutar también el build correspondiente si el entorno lo permite.

Para cambios de UI, comprobar el flujo afectado en navegador de escritorio y móvil. Una captura no basta: probar navegación entre páginas, menú móvil, carrusel, foco/teclado y CTA de WhatsApp cuando corresponda. Registrar en el relevo los comandos y comprobaciones realizados; si algo no pudo verificarse, decir por qué.

## Fuera de alcance por ahora

- Autenticación real.
- Implementación de `apps/api`.
- Integración con SUNAT.
- CMS y analítica.

Solo ampliar este alcance por solicitud explícita. «Iniciar sesión» permanece como entrada futura al área administrativa.

## Registro de decisiones

| Fecha | Decisión | Motivo o fuente |
|---|---|---|
| 2026-09-18 | Configurar el número de WhatsApp mediante `NEXT_PUBLIC_WHATSAPP_NUMBER`. | Evitar fijarlo en el código y permitir configuración por entorno. |
| 2026-09-18 | Construir `apps/web` con Webpack y conservar compatibilidad de instalación con npm. | Compatibilidad con el flujo de despliegue preparado para Hostinger. |
| 2026-09-18 | Usar una imagen local del mapa y destacar Creciendo Juntos y la UTP. | Mejorar la comprensión visual de la ubicación. |
| 2026-09-22 | Usar este archivo como memoria persistente estructurada, con protocolo de inicio y relevo. | Reducir la pérdida de contexto y evitar reconstruir decisiones en cada sesión. |
| 2026-10-16 | Dominio de producción `https://creciendojuntos.site`, canónico sin `www`, fijado en código como `SITE_URL`. | Dominio definitivo indicado por el usuario; no es secreto, así que no necesita variable de entorno. |
| 2026-09-26 | Refrescar el sistema visual (tokens, radios, header con blur, CTAs redondeados) sin cambiar rutas ni jerarquía de secciones. | Modernizar la sensación del sitio manteniendo Literata + Karla y los colores del logo. |

Añadir aquí solo decisiones duraderas. Los detalles pasajeros pertenecen al relevo de sesión o al historial de Git.

## Decisiones abiertas

Actualizar esta lista al resolver cada punto:

- [x] Stack: Next.js App Router, TypeScript, monorepo pnpm + Turborepo.
- [x] Arquitectura de navegación: multipágina con rutas de nivel superior.
- [x] CTA principal: WhatsApp.
- [x] Logo, servicios y fotos del carrusel: fuente en `recursos_internos/`, copias servidas desde `public/`.
- [x] WhatsApp y dirección centralizados en `site.ts`; el número no se muestra como texto en la UI.
- [x] Dominio: `creciendojuntos.site`.
- [ ] Hosting definitivo y procedimiento de despliegue verificado en producción (DNS de `creciendojuntos.site` y `www` apuntando al hosting, SSL activo).
- [ ] Copy definitivo de Nosotros y del hero; el actual es provisional.
- [ ] URLs reales de Facebook e Instagram; el footer todavía usa placeholders.
- [ ] Requisitos adicionales de accesibilidad o marca que deban respetarse.

## Relevo de la última sesión

**Actualizado:** 2026-10-16.

- Integración del dominio `https://creciendojuntos.site`: `SITE_URL` y `SITE_DESCRIPTION` en `src/lib/site.ts`; `metadataBase`, descripción y Open Graph (`es_PE`, logo como imagen) en `src/app/layout.tsx`; `alternates.canonical` en cada `page.tsx`; nuevos `src/app/robots.ts` y `src/app/sitemap.ts`; `noindex` en `/iniciar-sesion`; redirección 308 `www` → raíz en `next.config.mjs`.
- Validación: `pnpm --filter @creciendo-juntos/web lint` (ok); `pnpm build` en `apps/web` con `NEXT_PUBLIC_WHATSAPP_NUMBER` ficticio exportado solo en la shell (no había `.env.local` en esta máquina) (ok); con `pnpm start` se comprobó `/robots.txt`, `/sitemap.xml`, canónicas y `og:*` absolutas, `noindex` en `/iniciar-sesion` y `curl -H "Host: www.creciendojuntos.site"` → 308.
- Pendiente: el 2026-10-16 el dominio aún no resolvía en DNS. Al desplegar, apuntar raíz y `www` al hosting, activar SSL, configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` en el hosting y reconstruir; luego verificar `https://creciendojuntos.site/robots.txt` y registrar el sitemap en Google Search Console.
- Sin cambios visuales en esta sesión; sigue pendiente la revisión en navegador del rediseño del 2026-09-26 (menú móvil, carrusel, CTA WhatsApp).

