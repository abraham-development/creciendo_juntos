# AGENTS.md

Instrucciones para agentes que trabajan en este repositorio. Complementa el README (cuando exista); no lo reemplaza.

## Proyecto

**Creciendo Juntos** es el sitio web público del centro (estimulación temprana y psicología infantil/familiar). Objetivo del repo: diseñar, construir y mantener ese sitio.

- Idioma de la interfaz y del copy: **español**.
- Nombre de marca: **Creciendo Juntos**. No abreviar, no traducir, no renombrar. En el logo: **Creciendo Juntos A&N**.

## Estado actual

- Landing **implementado** en `apps/web` (Next.js App Router + TypeScript + Tailwind).
- Sitio **multipágina**: cada ítem del menú principal es una **ruta de nivel superior**, no anclas en una sola página.
- Diseño orientado a **centro de psicología** (calma, rigor, profesional); no estética de “web infantil”.
- Verdad de producto en `PRODUCT.md`. Brief histórico en `recursos_internos/Pompt_inicial.txt`.
- Tooling de diseño (Impeccable): copia canónica en `.cursor/skills/impeccable` (`.agents/` es duplicado; excluido del índice en `.cursorignore`).
- Contexto del Agent acotado con **`.cursorignore`** en la raíz (assets binarios, builds, lockfile, placeholder `apps/api`, etc.). Para un archivo ignorado, usar `@ruta` en el chat.

## Rutas (App Router)

| Ruta | Contenido |
|------|-----------|
| `/` | Home: hero con carrusel dinámico |
| `/servicios` | Lista de servicios |
| `/nosotros` | Quiénes somos |
| `/ubicacion` | Dirección, mapa y CTA de WhatsApp |
| `/iniciar-sesion` | Placeholder admin (sin auth aún) |

Navegación definida en `NAV` (`apps/web/src/lib/site.ts`). Header: `Link` de Next + ítem activo con `usePathname()` y `aria-current="page"`. Cada página tiene su `<main id="contenido">` (enlace “Saltar al contenido”) y `metadata` propia (`title`, `description`).

## Stack y comandos

Monorepo **pnpm + Turborepo**.

```text
Instalar:    pnpm install
Desarrollar: pnpm dev          (apps/web en http://localhost:3000)
Build:       pnpm build
Lint:        pnpm lint
```

- `apps/web`: sitio público (entrega actual).
- `apps/api`: backend futuro (admin, SUNAT). **No implementar** hasta que se pida.
- Paquetes compartidos: `packages/typescript-config`, `packages/eslint-config`.

## Estructura relevante (`apps/web`)

- `src/lib/site.ts` — marca, slogan, WhatsApp, dirección, `NAV`, `SERVICIOS`, `HERO_SLIDES`.
- `src/components/` — `SiteHeader`, `SiteFooter`, `HeroCarousel`, `Servicios`, `Nosotros`, `Contacto`, `WhatsAppCta`, `icons`.
- `src/app/` — `layout.tsx` (fuentes, header/footer globales), `globals.css` (tokens de color y tipografía), una carpeta `page.tsx` por ruta.
- CTA principal: WhatsApp (`PRIMARY_WHATSAPP` en `site.ts`).

### Assets

- Fuente: `recursos_internos/` (logo, flyer de servicios, fotos, brief).
- Servido por Next: copiar a `apps/web/public/` (p. ej. `logotipo.jpeg`, `hero/sala.jpeg`, `hero/estimulacion.png`, `hero/familia.png`).
- Tras añadir o cambiar imágenes en `recursos_internos/`, actualizar `public/` y, si aplica, `HERO_SLIDES` o rutas en componentes.

### Diseño (implementado)

- Tipografía: **Literata** (display) + **Karla** (cuerpo), vía `next/font/google`.
- Colores en `globals.css`: violeta/naranja/teal del logo, fondos paper, contraste usable.
- Impeccable en modo **Persuade** para cambios de UI grandes; identidad futura documentada en `DESIGN.md` cuando exista.
- No inventar paleta o “mundo” visual fuera de `PRODUCT.md`, `DESIGN.md` o el brief.

## Cómo trabajar

- Cambios pequeños y concretos. No reescribir el sitio si basta un ajuste.
- No inventar hechos de producto: promesas, precios, testimonios, clientes, métricas, legal o datos de contacto. Si falta copy real, marcarlo como pendiente o preguntar.
- Al añadir una sección pública nueva, preferir **nueva ruta** bajo `app/` y entrada en `NAV`, con un solo `<h1>` por página.
- UI: verificar el flujo afectado en el navegador (desktop y móvil) antes de dar por terminado. Una captura no basta; confirmar comportamiento (navegación entre páginas, menú móvil, carrusel).
- Commits y PRs solo si el usuario los pide.

Convenciones de código:

- Componentes pequeños, nombres claros, estilos junto a la UI que afectan.
- Tailwind CSS + tokens en `globals.css`.
- Semántica HTML, jerarquía tipográfica (`h1` por página), foco visible, `alt` en imágenes.
- Responsive desde el primer corte.

## Fuera de alcance (por ahora)

Auth real, `apps/api`, SUNAT, CMS, analítica, salvo petición explícita. «Iniciar sesión» permanece como entrada futura al área admin.

## Decisiones abiertas

Actualizar al resolver cada punto:

- [x] Stack: Next.js App Router, TypeScript, monorepo pnpm + Turborepo
- [x] Arquitectura de navegación: multipágina (rutas top-level por ítem del menú)
- [x] CTA principal: WhatsApp
- [x] Logo, servicios y fotos del carrusel (fuente en `recursos_internos/`, servidas desde `public/`)
- [x] WhatsApp y dirección (según flyer; centralizados en `site.ts`; números no visibles en la UI)
- [ ] Hosting
- [ ] Copy definitivo de Nosotros / hero (texto provisional en componentes)
- [ ] URLs de Facebook e Instagram (footer con placeholders)
- [ ] Accesibilidad o marca extra que deban respetarse
